import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiX, BiLogInCircle, BiShow, BiHide } from 'react-icons/bi';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
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

            let userFriendlyMsg = "Something went wrong. Please try again.";

            // Map Firebase error codes to custom messages
            switch (err.code) {
                case 'auth/invalid-email':
                    userFriendlyMsg = "The email address is not valid.";
                    break;
                case 'auth/user-disabled':
                    userFriendlyMsg = "This admin account has been disabled.";
                    break;
                case 'auth/user-not-found':
                    userFriendlyMsg = "No admin account found with this email.";
                    break;
                case 'auth/wrong-password':
                    userFriendlyMsg = "Incorrect password. Please try again.";
                    break;
                case 'auth/invalid-credential':
                    userFriendlyMsg = "Invalid email or password. Please check again.";
                    break;
                case 'auth/too-many-requests':
                    userFriendlyMsg = "Too many attempts. Account is temporarily locked. Try again later.";
                    break;
                case 'auth/network-request-failed':
                    userFriendlyMsg = "Network error. Please check your internet connection.";
                    break;
                default:
                    // Only show the raw message if it's not a common auth error we handle
                    if (err.message) {
                        userFriendlyMsg = err.message.replace("Firebase: ", "");
                    }
            }

            setError(userFriendlyMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-overlay" onClick={onClose}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <button className="auth-close-btn" onClick={onClose} aria-label="Close">
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
                    <div className="input-group password-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter Admin Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            autoComplete="current-password"
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <BiHide /> : <BiShow />}
                        </button>
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
