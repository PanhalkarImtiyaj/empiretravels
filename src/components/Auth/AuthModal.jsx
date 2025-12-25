import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiX, BiLogInCircle } from 'react-icons/bi';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        // Mode is now always login
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Login logic
            await signInWithEmailAndPassword(auth, formData.email, formData.password);
            console.log("Login successful!");

            onClose();
            navigate('/admin');
        } catch (err) {
            console.error("Auth error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-overlay" onClick={onClose}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <BiX />
                </button>

                <div className="auth-header">
                    <h2>Admin Portal</h2>
                    <p>Secure access for administrators only</p>
                    {error && <div className="auth-error-msg">{error}</div>}
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter Admin Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="username"
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Admin Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    <button type="submit" className="submit-btn btn-enhanced" disabled={loading}>
                        {loading ? (
                            <span className="spinner-auth"></span>
                        ) : (
                            <>
                                <BiLogInCircle /> Login
                            </>
                        )}
                    </button>
                </form>

            </div>
        </div>
    );
};

export default AuthModal;
