import { useState, useEffect } from 'react';
import { Upload, Trash2, Lock, LogOut, Image as ImageIcon, AlertCircle } from 'lucide-react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const ADMIN_PASSWORD = 'JM2024!'; // Change this to your desired password

  // Load images from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('jm-gallery-images');
    if (stored) {
      try {
        setImages(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to load images:', e);
      }
    }
  }, []);

  // Save images to localStorage
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('jm-gallery-images', JSON.stringify(images));
    }
  }, [images, isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setPassword('');
      setError('');
      setSuccess('✅ Logged in successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } else {
      setError('❌ Invalid password');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setImages([]);
  };

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setUploading(true);
    setError('');

    try {
      for (const file of files) {
        // Check file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          setError(`❌ ${file.name} is too large (max 5MB)`);
          continue;
        }

        // Convert to base64
        const reader = new FileReader();
        reader.onloadend = () => {
          const newImage = {
            id: Date.now() + Math.random(),
            src: reader.result,
            alt: file.name.replace(/\.[^/.]+$/, ''),
            uploadedAt: new Date().toLocaleDateString(),
            size: (file.size / 1024).toFixed(2) + ' KB',
          };
          setImages((prev) => [newImage, ...prev]);
          setSuccess(`✅ ${file.name} uploaded successfully!`);
          setTimeout(() => setSuccess(''), 2000);
        };
        reader.readAsDataURL(file);
      }
    } catch (err) {
      setError('❌ Upload failed: ' + err.message);
    } finally {
      setUploading(false);
      e.target.value = ''; // Reset input
    }
  };

  const deleteImage = (id) => {
    if (window.confirm('Delete this image? This cannot be undone.')) {
      setImages((prev) => prev.filter((img) => img.id !== id));
      setSuccess('✅ Image deleted');
      setTimeout(() => setSuccess(''), 2000);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login">
        <div className="login-card">
          <div className="login-icon">
            <Lock size={40} />
          </div>
          <h1>Admin Dashboard</h1>
          <p>Enter password to manage gallery</p>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              autoFocus
            />
            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>

          {error && <div className="error-msg">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="admin-header">
        <div className="header-left">
          <h1>📸 Gallery Manager</h1>
          <p>{images.length} images in gallery</p>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Messages */}
      {error && (
        <div className="alert alert-error">
          <AlertCircle size={18} />
          {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success">
          {success}
        </div>
      )}

      {/* Upload Section */}
      <div className="upload-section">
        <div className="upload-box">
          <ImageIcon size={40} />
          <h3>Upload Images</h3>
          <p>Drag and drop or click to select</p>
          <label className="upload-input">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              disabled={uploading}
            />
            <span className="upload-btn">
              <Upload size={18} />
              {uploading ? 'Uploading...' : 'Choose Files'}
            </span>
          </label>
          <p className="upload-hint">Max 5MB per file • JPG, PNG, WebP supported</p>
        </div>
      </div>

      {/* Images Grid */}
      <div className="images-section">
        <h2>Manage Images ({images.length})</h2>

        {images.length === 0 ? (
          <div className="empty-state">
            <ImageIcon size={48} />
            <p>No images yet. Upload some to get started!</p>
          </div>
        ) : (
          <div className="images-grid">
            {images.map((img) => (
              <div key={img.id} className="image-card">
                <div className="image-wrapper">
                  <img src={img.src} alt={img.alt} />
                  <div className="image-overlay">
                    <button
                      onClick={() => deleteImage(img.id)}
                      className="delete-btn"
                      title="Delete image"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="image-info">
                  <p className="image-name">{img.alt}</p>
                  <p className="image-meta">{img.uploadedAt} • {img.size}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="dashboard-stats">
        <div className="stat-box">
          <span className="stat-label">Total Images</span>
          <span className="stat-value">{images.length}</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Storage Used</span>
          <span className="stat-value">{(images.reduce((sum, img) => sum + parseFloat(img.size), 0)).toFixed(1)} KB</span>
        </div>
      </div>
    </div>
  );
}
