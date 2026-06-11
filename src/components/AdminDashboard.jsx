import { useState, useEffect } from 'react';
import { Upload, Trash2, Lock, LogOut, Image as ImageIcon, AlertCircle, Plus, Edit3, Users, Award } from 'lucide-react';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState('players');
  const [images, setImages] = useState([]);
  const [players, setPlayers] = useState([]);
  const [executives, setExecutives] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPlayerForm, setShowPlayerForm] = useState(false);
  const [showExecutiveForm, setShowExecutiveForm] = useState(false);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [editingExecutive, setEditingExecutive] = useState(null);

  const ADMIN_PASSWORD = 'JM2024!'; // Change this to your desired password

  // Load data from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('jm-gallery-images');
    if (stored) {
      try {
        setImages(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to load images:', e);
      }
    }

    const storedPlayers = localStorage.getItem('jm-players');
    if (storedPlayers) {
      try {
        setPlayers(JSON.parse(storedPlayers));
      } catch (e) {
        console.error('Failed to load players:', e);
      }
    }

    const storedExecutives = localStorage.getItem('jm-executives');
    if (storedExecutives) {
      try {
        setExecutives(JSON.parse(storedExecutives));
      } catch (e) {
        console.error('Failed to load executives:', e);
      }
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('jm-gallery-images', JSON.stringify(images));
      localStorage.setItem('jm-players', JSON.stringify(players));
      localStorage.setItem('jm-executives', JSON.stringify(executives));
    }
  }, [images, players, executives, isLoggedIn]);

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

  const handleAddPlayer = (playerData) => {
    if (editingPlayer) {
      setPlayers((prev) =>
        prev.map((p) => (p.id === editingPlayer.id ? { ...playerData, id: p.id } : p))
      );
      setSuccess('✅ Player updated successfully!');
      setEditingPlayer(null);
    } else {
      const newPlayer = {
        ...playerData,
        id: Date.now(),
      };
      setPlayers((prev) => [newPlayer, ...prev]);
      setSuccess('✅ Player added successfully!');
    }
    setShowPlayerForm(false);
    setTimeout(() => setSuccess(''), 2000);
  };

  const deletePlayer = (id) => {
    if (window.confirm('Delete this player? This cannot be undone.')) {
      setPlayers((prev) => prev.filter((p) => p.id !== id));
      setSuccess('✅ Player deleted');
      setTimeout(() => setSuccess(''), 2000);
    }
  };

  const handleAddExecutive = (execData) => {
    if (editingExecutive) {
      setExecutives((prev) =>
        prev.map((e) => (e.id === editingExecutive.id ? { ...execData, id: e.id } : e))
      );
      setSuccess('✅ Executive updated successfully!');
      setEditingExecutive(null);
    } else {
      const newExecutive = {
        ...execData,
        id: Date.now(),
      };
      setExecutives((prev) => [newExecutive, ...prev]);
      setSuccess('✅ Executive added successfully!');
    }
    setShowExecutiveForm(false);
    setTimeout(() => setSuccess(''), 2000);
  };

  const deleteExecutive = (id) => {
    if (window.confirm('Delete this executive? This cannot be undone.')) {
      setExecutives((prev) => prev.filter((e) => e.id !== id));
      setSuccess('✅ Executive deleted');
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
          <p>Enter password to manage content</p>

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
    <div className="admin-dashboard" style={{ paddingBottom: '40px' }}>
      {/* Header */}
      <div className="admin-header">
        <div className="header-left">
          <h1>🎯 Content Management</h1>
          <p>Manage players, executives, and gallery</p>
        </div>
        <button onClick={handleLogout} className="logout-btn">
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        <button
          className={`tab-btn ${tab === 'players' ? 'active' : ''}`}
          onClick={() => { setTab('players'); setShowPlayerForm(false); setEditingPlayer(null); }}
        >
          <Award size={18} /> Players ({players.length})
        </button>
        <button
          className={`tab-btn ${tab === 'executives' ? 'active' : ''}`}
          onClick={() => { setTab('executives'); setShowExecutiveForm(false); setEditingExecutive(null); }}
        >
          <Users size={18} /> Executives ({executives.length})
        </button>
        <button
          className={`tab-btn ${tab === 'gallery' ? 'active' : ''}`}
          onClick={() => { setTab('gallery'); setShowPlayerForm(false); setEditingPlayer(null); }}
        >
          <ImageIcon size={18} /> Gallery ({images.length})
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

      {/* Players Tab */}
      {tab === 'players' && (
        <div className="tab-content">
          <div className="section-header">
            <h2>Players Management</h2>
            {!showPlayerForm && (
              <button
                onClick={() => { setShowPlayerForm(true); setEditingPlayer(null); }}
                className="add-btn"
              >
                <Plus size={18} /> Add Player
              </button>
            )}
          </div>

          {showPlayerForm && (
            <PlayerForm
              player={editingPlayer}
              onSave={handleAddPlayer}
              onCancel={() => { setShowPlayerForm(false); setEditingPlayer(null); }}
            />
          )}

          {players.length === 0 ? (
            <div className="empty-state">
              <Award size={48} />
              <p>No players yet. Add your first player to get started!</p>
            </div>
          ) : (
            <div className="data-table">
              <div className="table-header">
                <div className="col-name">Name</div>
                <div className="col-position">Position</div>
                <div className="col-age">Age</div>
                <div className="col-destination">Destination</div>
                <div className="col-actions">Actions</div>
              </div>
              {players.map((player) => (
                <div key={player.id} className="table-row">
                  <div className="col-name">{player.name}</div>
                  <div className="col-position">{player.position}</div>
                  <div className="col-age">{player.age || '—'}</div>
                  <div className="col-destination">{player.destination}</div>
                  <div className="col-actions">
                    <button
                      onClick={() => { setEditingPlayer(player); setShowPlayerForm(true); }}
                      className="edit-btn"
                      title="Edit"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => deletePlayer(player.id)}
                      className="delete-btn"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Executives Tab */}
      {tab === 'executives' && (
        <div className="tab-content">
          <div className="section-header">
            <h2>Executives Management</h2>
            {!showExecutiveForm && (
              <button
                onClick={() => { setShowExecutiveForm(true); setEditingExecutive(null); }}
                className="add-btn"
              >
                <Plus size={18} /> Add Executive
              </button>
            )}
          </div>

          {showExecutiveForm && (
            <ExecutiveForm
              executive={editingExecutive}
              onSave={handleAddExecutive}
              onCancel={() => { setShowExecutiveForm(false); setEditingExecutive(null); }}
            />
          )}

          {executives.length === 0 ? (
            <div className="empty-state">
              <Users size={48} />
              <p>No executives yet. Add your first executive to get started!</p>
            </div>
          ) : (
            <div className="data-table">
              <div className="table-header">
                <div className="col-name">Name</div>
                <div className="col-role">Role</div>
                <div className="col-tags">Tags</div>
                <div className="col-actions">Actions</div>
              </div>
              {executives.map((exec) => (
                <div key={exec.id} className="table-row">
                  <div className="col-name">{exec.name}</div>
                  <div className="col-role">{exec.role}</div>
                  <div className="col-tags">{exec.tags?.join(', ') || '—'}</div>
                  <div className="col-actions">
                    <button
                      onClick={() => { setEditingExecutive(exec); setShowExecutiveForm(true); }}
                      className="edit-btn"
                      title="Edit"
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      onClick={() => deleteExecutive(exec.id)}
                      className="delete-btn"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Gallery Tab */}
      {tab === 'gallery' && (
        <div className="tab-content">
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
      )}
    </div>
  );
}

function PlayerForm({ player, onSave, onCancel }) {
  const [formData, setFormData] = useState(player || {
    name: '',
    position: '',
    age: '',
    destination: '',
    flag: '🇬🇭',
    img: '',
  });
  const [imagePreview, setImagePreview] = useState(player?.img || '');

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be less than 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, img: reader.result });
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.position || !formData.destination) {
      alert('Please fill in all required fields');
      return;
    }
    onSave(formData);
  };

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <label>Player Image</label>
          <div className="image-upload-section">
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
            <label className="file-input-label">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <span className="file-input-btn">Choose Image</span>
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Player name"
          />
        </div>
        <div className="form-group">
          <label>Position *</label>
          <input
            type="text"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            placeholder="e.g. Striker"
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder="Age"
          />
        </div>
        <div className="form-group">
          <label>Destination *</label>
          <input
            type="text"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            placeholder="e.g. FC Brondby, Denmark"
          />
        </div>
        <div className="form-group">
          <label>Flag Emoji</label>
          <input
            type="text"
            value={formData.flag}
            onChange={(e) => setFormData({ ...formData, flag: e.target.value })}
            placeholder="🇬🇭"
            maxLength="2"
          />
        </div>
      </div>
      <div className="form-actions">
        <button type="submit" className="save-btn">
          {player ? 'Update Player' : 'Add Player'}
        </button>
        <button type="button" onClick={onCancel} className="cancel-btn">
          Cancel
        </button>
      </div>
    </form>
  );
}

function ExecutiveForm({ executive, onSave, onCancel }) {
  const [formData, setFormData] = useState(executive || {
    name: '',
    role: '',
    bio: '',
    img: '',
    tags: [],
  });
  const [tagInput, setTagInput] = useState('');
  const [imagePreview, setImagePreview] = useState(executive?.img || '');

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be less than 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, img: reader.result });
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.bio) {
      alert('Please fill in all required fields');
      return;
    }
    onSave(formData);
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  const removeTag = (tag) => {
    setFormData({ ...formData, tags: formData.tags.filter((t) => t !== tag) });
  };

  return (
    <form className="form-section" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <label>Executive Image</label>
          <div className="image-upload-section">
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
              </div>
            )}
            <label className="file-input-label">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <span className="file-input-btn">Choose Image</span>
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Executive name"
          />
        </div>
        <div className="form-group">
          <label>Role *</label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            placeholder="e.g. Founder & Head Scout"
          />
        </div>
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <label>Bio *</label>
          <textarea
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Executive bio"
            rows="3"
          />
        </div>
        <div className="form-group" style={{ gridColumn: '1 / -1' }}>
          <label>Tags</label>
          <div className="tag-input">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              placeholder="Add a tag and press Enter"
            />
            <button type="button" onClick={addTag} className="add-tag-btn">Add</button>
          </div>
          {formData.tags.length > 0 && (
            <div className="tags-list">
              {formData.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                  <button type="button" onClick={() => removeTag(tag)}>×</button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button type="submit" className="save-btn">
          {executive ? 'Update Executive' : 'Add Executive'}
        </button>
        <button type="button" onClick={onCancel} className="cancel-btn">
          Cancel
        </button>
      </div>
    </form>
  );
}
