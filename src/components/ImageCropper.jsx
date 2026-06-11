import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { X, RotateCw } from 'lucide-react';
import './ImageCropper.css';

export default function ImageCropper({ image, onCrop, onCancel }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = async () => {
    if (!croppedAreaPixels) return;

    const canvas = document.createElement('canvas');
    const img = new Image();
    img.onload = () => {
      const ctx = canvas.getContext('2d');
      canvas.width = croppedAreaPixels.width;
      canvas.height = croppedAreaPixels.height;

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      ctx.drawImage(
        img,
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );

      const croppedImage = canvas.toDataURL('image/jpeg', 0.95);
      onCrop(croppedImage);
    };
    img.src = image;
  };

  return (
    <div className="image-cropper-modal">
      <div className="cropper-overlay" onClick={onCancel} />
      <div className="cropper-content">
        <div className="cropper-header">
          <h3>Crop & Position Image</h3>
          <button onClick={onCancel} className="close-btn">
            <X size={20} />
          </button>
        </div>

        <div className="cropper-container">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={1}
            cropShape="round"
            showGrid={false}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
          />
        </div>

        <div className="cropper-controls">
          <div className="control-group">
            <label>Zoom</label>
            <input
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="slider"
            />
            <span className="value">{zoom.toFixed(1)}x</span>
          </div>

          <div className="control-group">
            <label>Rotate</label>
            <button
              onClick={() => setRotation((r) => (r + 90) % 360)}
              className="rotate-btn"
            >
              <RotateCw size={16} /> Rotate 90°
            </button>
            <span className="value">{rotation}°</span>
          </div>
        </div>

        <div className="cropper-actions">
          <button onClick={handleCrop} className="crop-save-btn">
            Apply Crop
          </button>
          <button onClick={onCancel} className="crop-cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
