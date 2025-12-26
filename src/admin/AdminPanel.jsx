import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/config';
import { collection, getDocs, query, orderBy, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, getDoc, setDoc } from 'firebase/firestore';
import { BiLogOut, BiUser, BiBus, BiMap, BiStats, BiCalendarCheck, BiPackage, BiPlus, BiPlusCircle, BiEditAlt, BiTrash, BiCheck, BiX, BiCloudUpload, BiLoaderAlt, BiMenu, BiShow, BiTime, BiInfoCircle, BiImage } from 'react-icons/bi';
import './AdminPanel.css';

const AdminPanel = () => {
    const navigate = useNavigate();
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isPkgModalOpen, setIsPkgModalOpen] = useState(false);
    const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
    const [editingPkg, setEditingPkg] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [previewPkg, setPreviewPkg] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [pkgForm, setPkgForm] = useState({
        title: '',
        destination: '',
        duration: '',
        price: '',
        sleeperPrice: '',
        semiSleeperPrice: '',
        image: '',
        highlights: '',
        isPopular: false,
        meals: {
            breakfast: 'Chai & Fresh Nashta',
            lunch: 'Pure Veg Meal',
            dinner: 'Pure Veg Meal',
            description: '2 Times Pure Veg Meals + Morning Chai-Nashta'
        },
        accommodation: {
            type: 'Premium Hotels',
            description: 'Clean, comfortable & well-maintained premium accommodations',
            amenities: 'Clean Rooms, Hot Water, Comfortable Beds, Safe Location'
        }
    });
    const [aboutData, setAboutData] = useState({
        mission: '',
        yearsOfService: '8',
        proprietorMessage: '',
        proprietorName: 'Jeevan Patil',
        image: ''
    });
    const [aboutImagePreview, setAboutImagePreview] = useState(null);
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
    const [confirmModal, setConfirmModal] = useState({ show: false, title: '', message: '', onConfirm: null });

    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 4000);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                navigate('/');
            } else {
                fetchPackages();
                fetchAboutData();
            }
        });

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            unsubscribe();
            clearInterval(timer);
        };
    }, [navigate]);

    const fetchPackages = async () => {
        try {
            const q = query(collection(db, "packages"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const pkgsList = querySnapshot.docs.map(docu => ({
                id: docu.id,
                ...docu.data()
            }));
            setPackages(pkgsList);
        } catch (error) {
            console.error("Error fetching packages:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchAboutData = async () => {
        try {
            const docRef = doc(db, "settings", "about");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setAboutData(data);
                setAboutImagePreview(data.image);
            }
        } catch (error) {
            console.error("Error fetching about data:", error);
        }
    };

    const handleAboutSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);
        try {
            const imageUrl = aboutImagePreview || aboutData.image;
            const updatedData = {
                ...aboutData,
                image: imageUrl,
                updatedAt: serverTimestamp()
            };
            await setDoc(doc(db, "settings", "about"), updatedData);
            showToast("✨ About Us content updated successfully!");
        } catch (error) {
            console.error("Error updating about:", error);
            showToast("Error: " + error.message, "error");
        } finally {
            setUploading(false);
        }
    };

    const handlePkgSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);
        try {
            // Use the imagePreview (Base64 string) if it's new, otherwise keep old image
            const imageUrl = imagePreview || pkgForm.image;

            const pkgData = {
                ...pkgForm,
                image: imageUrl,
                highlights: (pkgForm.highlights || '').split(',').map(h => h.trim()).filter(h => h !== ''),
                price: Number(pkgForm.semiSleeperPrice || 0), // Use semiSleeperPrice as base price
                sleeperPrice: Number(pkgForm.sleeperPrice || 0),
                semiSleeperPrice: Number(pkgForm.semiSleeperPrice || 0),
                meals: pkgForm.meals,
                accommodation: {
                    ...pkgForm.accommodation,
                    amenities: (pkgForm.accommodation.amenities || '').split(',').map(a => a.trim()).filter(a => a !== '')
                },
                updatedAt: serverTimestamp()
            };

            if (editingPkg) {
                await updateDoc(doc(db, "packages", editingPkg.id), pkgData);
            } else {
                await addDoc(collection(db, "packages"), {
                    ...pkgData,
                    createdAt: serverTimestamp()
                });
            }

            setIsPkgModalOpen(false);
            setEditingPkg(null);
            setImageFile(null);
            setImagePreview(null);
            setPkgForm({
                title: '',
                destination: '',
                duration: '',
                price: '',
                sleeperPrice: '',
                semiSleeperPrice: '',
                image: '',
                highlights: '',
                isPopular: false,
                meals: {
                    breakfast: 'Chai & Fresh Nashta',
                    lunch: 'Pure Veg Meal',
                    dinner: 'Pure Veg Meal',
                    description: '2 Times Pure Veg Meals + Morning Chai-Nashta'
                },
                accommodation: {
                    type: 'Premium Hotels',
                    description: 'Clean, comfortable & well-maintained premium accommodations',
                    amenities: 'Clean Rooms, Hot Water, Comfortable Beds, Safe Location'
                }
            });
            fetchPackages();
            showToast(editingPkg ? "✏️ Package details refined successfully!" : "🚀 Luxury tour package launched!");
        } catch (error) {
            console.error("Error saving package:", error);
            showToast("Error saving: " + error.message, "error");
        } finally {
            setUploading(false);
        }
    };

    const compressImage = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const MAX_WIDTH = 800; // Resize to reasonable dimensions
                    const MAX_HEIGHT = 600;
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);

                    // Compress quality to 0.6 (60%)
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.6);
                    resolve(dataUrl);
                };
            };
        });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploading(true);
            try {
                const compressedBase64 = await compressImage(file);

                // Final safety check: if Base64 is still huge (> 300KB), alert
                // Base64 is roughly 33% larger than original binary
                if (compressedBase64.length > 450000) {
                    showToast("The image is too large. Please use a smaller photo.", "error");
                    e.target.value = null;
                    return;
                }

                setImagePreview(compressedBase64);
                setImageFile(file);
            } catch (error) {
                console.error("Compression error:", error);
                alert("Error processing image");
            } finally {
                setUploading(false);
            }
        }
    };

    const deletePackage = async (id) => {
        setConfirmModal({
            show: true,
            title: 'Delete Package',
            message: 'Are you sure you want to remove this package from the website?',
            onConfirm: async () => {
                await deleteDoc(doc(db, "packages", id));
                fetchPackages();
                showToast("🗑️ Package removed from live listings");
                setConfirmModal({ show: false, title: '', message: '', onConfirm: null });
            }
        });
    };

    const openEditPkg = (pkg) => {
        setEditingPkg(pkg);
        setImagePreview(pkg.image || '');
        setPkgForm({
            title: pkg.title || '',
            destination: pkg.destination || '',
            duration: pkg.duration || '',
            price: pkg.price || '',
            sleeperPrice: pkg.sleeperPrice || '',
            semiSleeperPrice: pkg.semiSleeperPrice || '',
            image: pkg.image || '',
            highlights: pkg.highlights?.join(', ') || '',
            isPopular: pkg.isPopular || false,
            meals: pkg.meals || {
                breakfast: 'Chai & Fresh Nashta',
                lunch: 'Pure Veg Meal',
                dinner: 'Pure Veg Meal',
                description: '2 Times Pure Veg Meals + Morning Chai-Nashta'
            },
            accommodation: pkg.accommodation ? {
                ...pkg.accommodation,
                amenities: Array.isArray(pkg.accommodation.amenities)
                    ? pkg.accommodation.amenities.join(', ')
                    : pkg.accommodation.amenities || 'Clean Rooms, Hot Water, Comfortable Beds, Safe Location'
            } : {
                type: 'Premium Hotels',
                description: 'Clean, comfortable & well-maintained premium accommodations',
                amenities: 'Clean Rooms, Hot Water, Comfortable Beds, Safe Location'
            }
        });
        setIsPkgModalOpen(true);
    };

    const handleLogout = async () => {
        await auth.signOut();
        navigate('/');
    };

    if (loading) {
        return (
            <div className="admin-loading">
                <div className="spinner"></div>
                <p>Loading Admin Panel...</p>
            </div>
        );
    }

    return (
        <div className="admin-container">
            {/* Sidebar Overlay */}
            {isSidebarOpen && <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}

            {/* Sidebar */}
            <aside className={`admin-sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="sidebar-header">
                    <h2>Empire Admin</h2>
                    <button className="close-sidebar" onClick={() => setIsSidebarOpen(false)}><BiX /></button>
                </div>
                <nav className="sidebar-nav">
                    <button
                        className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('dashboard'); setIsSidebarOpen(false); }}
                    >
                        <BiStats /> Dashboard
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'packages' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('packages'); setIsSidebarOpen(false); }}
                    >
                        <BiPackage /> Packages
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('about'); setIsSidebarOpen(false); }}
                    >
                        <BiInfoCircle /> About Us
                    </button>
                </nav>
                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={handleLogout}>
                        <BiLogOut /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="admin-main">
                <header className="admin-header">
                    <div className="header-left">
                        <button className="menu-toggle" onClick={() => setIsSidebarOpen(true)}>
                            <BiMenu />
                        </button>
                        <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                    </div>
                    <div className="admin-user-info">
                        <span className="welcome-text">Welcome, Admin</span>
                        <div className="avatar">A</div>
                    </div>
                </header>

                <div className="admin-content">
                    {activeTab === 'dashboard' && (
                        <>
                            <div className="dashboard-stats">
                                <div className="stat-card">
                                    <div className="stat-icon users"><BiTime /></div>
                                    <div className="stat-details">
                                        <h3>Live Time</h3>
                                        <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                                            {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                        </p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon packages"><BiPackage /></div>
                                    <div className="stat-details">
                                        <h3>Total Packages</h3>
                                        <p>{packages.length}</p>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon bookings"><BiCalendarCheck /></div>
                                    <div className="stat-details">
                                        <h3>Total Destinations</h3>
                                        <p>{[...new Set(packages.map(p => p.destination))].length}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Packages */}
                            <div className="dashboard-section">
                                <h2 className="section-title">Recent Packages</h2>
                                <div className="admin-table-container">
                                    <table className="admin-table">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Destination</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {packages.slice(0, 5).map(pkg => (
                                                <tr key={pkg.id}>
                                                    <td><img src={pkg.image} alt={pkg.title} className="small-pkg-img" /></td>
                                                    <td>{pkg.title}</td>
                                                    <td>{pkg.destination}</td>
                                                    <td>₹{Number(pkg.price).toLocaleString('en-IN')}</td>
                                                </tr>
                                            ))}
                                            {packages.length === 0 && (
                                                <tr>
                                                    <td colSpan="4" style={{ textAlign: 'center', padding: '30px', color: '#9ca3af' }}>No packages yet. Add your first package!</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="dashboard-section">
                                <h2 className="section-title">Quick Actions</h2>
                                <div className="quick-actions">
                                    <button className="quick-action-btn" onClick={() => setActiveTab('packages')}>
                                        <BiPackage />
                                        <span>Manage Packages</span>
                                    </button>
                                    <button className="quick-action-btn" onClick={() => {
                                        setEditingPkg(null);
                                        setImagePreview(null);
                                        setPkgForm({
                                            title: '',
                                            destination: '',
                                            duration: '',
                                            price: '',
                                            sleeperPrice: '',
                                            semiSleeperPrice: '',
                                            image: '',
                                            highlights: '',
                                            isPopular: false,
                                            meals: {
                                                breakfast: 'Chai & Fresh Nashta',
                                                lunch: 'Pure Veg Meal',
                                                dinner: 'Pure Veg Meal',
                                                description: '2 Times Pure Veg Meals + Morning Chai-Nashta'
                                            },
                                            accommodation: {
                                                type: 'Premium Hotels',
                                                description: 'Clean, comfortable & well-maintained premium accommodations',
                                                amenities: 'Clean Rooms, Hot Water, Comfortable Beds, Safe Location'
                                            }
                                        });
                                        setIsPkgModalOpen(true);
                                    }}>
                                        <BiPlusCircle />
                                        <span>Add New Package</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'packages' && (
                        <div className="packages-admin-section">
                            <div className="section-header">
                                <h2>Manage Packages</h2>
                                <button className="add-pkg-btn" onClick={() => {
                                    setEditingPkg(null);
                                    setImagePreview(null);
                                    setPkgForm({
                                        title: '',
                                        destination: '',
                                        duration: '',
                                        price: '',
                                        sleeperPrice: '',
                                        semiSleeperPrice: '',
                                        image: '',
                                        highlights: '',
                                        isPopular: false,
                                        meals: {
                                            breakfast: 'Chai & Fresh Nashta',
                                            lunch: 'Pure Veg Meal',
                                            dinner: 'Pure Veg Meal',
                                            description: '2 Times Pure Veg Meals + Morning Chai-Nashta'
                                        },
                                        accommodation: {
                                            type: 'Premium Hotels',
                                            description: 'Clean, comfortable & well-maintained premium accommodations',
                                            amenities: 'Clean Rooms, Hot Water, Comfortable Beds, Safe Location'
                                        }
                                    });
                                    setIsPkgModalOpen(true);
                                }}>
                                    <BiPlusCircle /> Add New Package
                                </button>
                            </div>

                            <div className="admin-table-container">
                                <table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Destination</th>
                                            <th>Duration</th>
                                            <th>Price</th>
                                            <th>Preview</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {packages.map((pkg) => (
                                            <tr key={pkg.id}>
                                                <td><img src={pkg.image} alt={pkg.title} className="small-pkg-img" /></td>
                                                <td>{pkg.title}</td>
                                                <td>{pkg.destination}</td>
                                                <td>{pkg.duration}</td>
                                                <td>₹{Number(pkg.price).toLocaleString('en-IN')}</td>
                                                <td>
                                                    <button className="action-btn preview" onClick={() => setPreviewPkg(pkg)} title="Preview">
                                                        <BiShow />
                                                    </button>
                                                </td>
                                                <td className="actions-cell">
                                                    <button className="action-btn edit" onClick={() => openEditPkg(pkg)} title="Edit"><BiEditAlt /></button>
                                                    <button className="action-btn delete" onClick={() => deletePackage(pkg.id)} title="Delete"><BiTrash /></button>
                                                </td>
                                            </tr>
                                        ))}
                                        {packages.length === 0 && (
                                            <tr>
                                                <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}>
                                                    <BiPackage style={{ fontSize: '3rem', marginBottom: '10px', opacity: 0.3, display: 'block', margin: '0 auto 10px' }} />
                                                    <p style={{ margin: 0 }}>No packages available. Click "Add New Package" to get started!</p>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeTab === 'about' && (
                        <div className="about-admin-section">
                            <div className="section-header">
                                <h2>Manage About Us</h2>
                                {!aboutData.mission && (
                                    <button className="add-pkg-btn" onClick={() => setIsAboutModalOpen(true)}>
                                        <BiPlusCircle /> Add About Info
                                    </button>
                                )}
                            </div>

                            <div className="admin-table-container">
                                <table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Proprietor</th>
                                            <th>Years</th>
                                            <th>Mission Preview</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {aboutData.mission ? (
                                            <tr>
                                                <td><img src={aboutData.image} alt="About" className="small-pkg-img" /></td>
                                                <td>{aboutData.proprietorName}</td>
                                                <td>{aboutData.yearsOfService}</td>
                                                <td>{aboutData.mission.substring(0, 50)}...</td>
                                                <td className="actions-cell">
                                                    <button className="action-btn edit" onClick={() => setIsAboutModalOpen(true)} title="Edit"><BiEditAlt /></button>
                                                </td>
                                            </tr>
                                        ) : (
                                            <tr>
                                                <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: '#9ca3af' }}>No About Us data found.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {(activeTab !== 'dashboard' && activeTab !== 'packages' && activeTab !== 'about') && (
                        <div className="coming-soon-admin">
                            <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} management coming soon!</h2>
                        </div>
                    )}
                </div>
            </main>

            {/* Package Modal */}
            {isPkgModalOpen && (
                <div className="admin-modal-overlay" onClick={() => setIsPkgModalOpen(false)}>
                    <div className="admin-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{editingPkg ? 'Edit Package' : 'Add New Package'}</h2>
                            <button className="modal-close" onClick={() => setIsPkgModalOpen(false)}><BiX /></button>
                        </div>
                        <form onSubmit={handlePkgSubmit} className="admin-pkg-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Package Title *</label>
                                    <input type="text" value={pkgForm.title} onChange={e => setPkgForm({ ...pkgForm, title: e.target.value })} required placeholder="e.g., Kedarnath Dham Yatra" />
                                </div>
                                <div className="form-group">
                                    <label>Destination *</label>
                                    <input type="text" value={pkgForm.destination} onChange={e => setPkgForm({ ...pkgForm, destination: e.target.value })} required placeholder="e.g., Uttarakhand" />
                                </div>
                                <div className="form-group">
                                    <label>Duration *</label>
                                    <input type="text" value={pkgForm.duration} onChange={e => setPkgForm({ ...pkgForm, duration: e.target.value })} required placeholder="e.g., 5 Days / 4 Nights" />
                                </div>
                                <div className="form-group">
                                    <label>Semi-Sleeper Price (₹) *</label>
                                    <input type="number" value={pkgForm.semiSleeperPrice} onChange={e => setPkgForm({ ...pkgForm, semiSleeperPrice: e.target.value })} required placeholder="e.g., 18999" />
                                </div>
                                <div className="form-group">
                                    <label>Sleeper Price (₹) *</label>
                                    <input type="number" value={pkgForm.sleeperPrice} onChange={e => setPkgForm({ ...pkgForm, sleeperPrice: e.target.value })} required placeholder="e.g., 22999" />
                                </div>
                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={pkgForm.isPopular}
                                            onChange={e => setPkgForm({ ...pkgForm, isPopular: e.target.checked })}
                                        />
                                        <span>Show in Popular Packages (Home Page)</span>
                                    </label>
                                </div>
                            </div>

                            {/* Meals Section */}
                            <div className="form-section">
                                <h3 className="section-heading">🍽️ Meals Information</h3>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Breakfast</label>
                                        <input
                                            type="text"
                                            value={pkgForm.meals.breakfast}
                                            onChange={e => setPkgForm({ ...pkgForm, meals: { ...pkgForm.meals, breakfast: e.target.value } })}
                                            placeholder="e.g., Chai & Fresh Nashta"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Lunch</label>
                                        <input
                                            type="text"
                                            value={pkgForm.meals.lunch}
                                            onChange={e => setPkgForm({ ...pkgForm, meals: { ...pkgForm.meals, lunch: e.target.value } })}
                                            placeholder="e.g., Pure Veg Meal"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Dinner</label>
                                        <input
                                            type="text"
                                            value={pkgForm.meals.dinner}
                                            onChange={e => setPkgForm({ ...pkgForm, meals: { ...pkgForm.meals, dinner: e.target.value } })}
                                            placeholder="e.g., Pure Veg Meal"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Meals Description</label>
                                    <input
                                        type="text"
                                        value={pkgForm.meals.description}
                                        onChange={e => setPkgForm({ ...pkgForm, meals: { ...pkgForm.meals, description: e.target.value } })}
                                        placeholder="e.g., 2 Times Pure Veg Meals + Morning Chai-Nashta"
                                    />
                                </div>
                            </div>

                            {/* Accommodation Section */}
                            <div className="form-section">
                                <h3 className="section-heading">🏨 Accommodation Details</h3>
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Accommodation Type</label>
                                        <input
                                            type="text"
                                            value={pkgForm.accommodation.type}
                                            onChange={e => setPkgForm({ ...pkgForm, accommodation: { ...pkgForm.accommodation, type: e.target.value } })}
                                            placeholder="e.g., Premium Hotels"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Amenities (comma separated)</label>
                                        <input
                                            type="text"
                                            value={pkgForm.accommodation.amenities}
                                            onChange={e => setPkgForm({ ...pkgForm, accommodation: { ...pkgForm.accommodation, amenities: e.target.value } })}
                                            placeholder="Clean Rooms, Hot Water, Comfortable Beds"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Accommodation Description</label>
                                    <textarea
                                        rows="2"
                                        value={pkgForm.accommodation.description}
                                        onChange={e => setPkgForm({ ...pkgForm, accommodation: { ...pkgForm.accommodation, description: e.target.value } })}
                                        placeholder="e.g., Clean, comfortable & well-maintained premium accommodations"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="form-group full-width upload-group">
                                <label>Package Image *</label>
                                <div className="image-upload-wrapper">
                                    <div className="image-preview-box">
                                        {imagePreview ? (
                                            <img src={imagePreview} alt="Preview" />
                                        ) : (
                                            <div className="upload-placeholder">
                                                <BiCloudUpload />
                                                <span>No image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="upload-controls">
                                        <input
                                            type="file"
                                            id="pkg-image"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="file-input-hidden"
                                        />
                                        <label htmlFor="pkg-image" className="btn-upload">
                                            Choose Image
                                        </label>
                                        <p className="upload-hint">Max 100KB, auto-compressed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Highlights (comma separated) *</label>
                                <textarea value={pkgForm.highlights} onChange={e => setPkgForm({ ...pkgForm, highlights: e.target.value })} required placeholder="Temple visit, Scenic views, Local cuisine"></textarea>
                            </div>

                            {/* Preview Section */}
                            {(pkgForm.title || pkgForm.destination || pkgForm.price) && (
                                <div className="form-preview">
                                    <h3>Preview</h3>
                                    <div className="preview-card">
                                        {imagePreview && <img src={imagePreview} alt="Preview" className="preview-img" />}
                                        <div className="preview-details">
                                            <h4>{pkgForm.title || 'Package Title'}</h4>
                                            <p><strong>Destination:</strong> {pkgForm.destination || 'N/A'}</p>
                                            <p><strong>Duration:</strong> {pkgForm.duration || 'N/A'}</p>
                                            <p><strong>Semi-Sleeper:</strong> ₹{Number(pkgForm.semiSleeperPrice || 0).toLocaleString('en-IN')}</p>
                                            <p><strong>Sleeper:</strong> ₹{Number(pkgForm.sleeperPrice || 0).toLocaleString('en-IN')}</p>
                                            {pkgForm.highlights && (
                                                <div className="preview-highlights">
                                                    <strong>Highlights:</strong>
                                                    <ul>
                                                        {pkgForm.highlights.split(',').slice(0, 3).map((h, i) => (
                                                            <li key={i}>{h.trim()}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="modal-footer">
                                <button type="button" className="btn-cancel" onClick={() => setIsPkgModalOpen(false)} disabled={uploading}>Cancel</button>
                                <button type="submit" className="btn-save" disabled={uploading}>
                                    {uploading ? (
                                        <>
                                            <BiLoaderAlt className="spin" />
                                            Saving...
                                        </>
                                    ) : (
                                        editingPkg ? 'Update Package' : 'Save Package'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            )}

            {/* Preview Modal */}
            {previewPkg && (
                <div className="admin-modal-overlay" onClick={() => setPreviewPkg(null)}>
                    <div className="admin-modal preview-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Package Details</h2>
                            <button className="modal-close" onClick={() => setPreviewPkg(null)}><BiX /></button>
                        </div>
                        <div className="preview-modal-content">
                            <div className="preview-image-large">
                                <img src={previewPkg.image} alt={previewPkg.title} />
                            </div>
                            <div className="preview-info">
                                <h3>{previewPkg.title}</h3>
                                <div className="preview-meta">
                                    <div className="meta-item">
                                        <BiMap />
                                        <div>
                                            <span className="meta-label">Destination</span>
                                            <span className="meta-value">{previewPkg.destination}</span>
                                        </div>
                                    </div>
                                    <div className="meta-item">
                                        <BiCalendarCheck />
                                        <div>
                                            <span className="meta-label">Duration</span>
                                            <span className="meta-value">{previewPkg.duration}</span>
                                        </div>
                                    </div>
                                    <div className="meta-item">
                                        <BiStats />
                                        <div>
                                            <span className="meta-label">Semi-Sleeper</span>
                                            <span className="meta-value price-highlight">₹{Number(previewPkg.semiSleeperPrice || previewPkg.price || 0).toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>
                                    <div className="meta-item">
                                        <BiStats />
                                        <div>
                                            <span className="meta-label">Sleeper</span>
                                            <span className="meta-value price-highlight">₹{Number(previewPkg.sleeperPrice || 0).toLocaleString('en-IN')}</span>
                                        </div>
                                    </div>
                                </div>
                                {previewPkg.highlights && previewPkg.highlights.length > 0 && (
                                    <div className="preview-section">
                                        <h4>Highlights</h4>
                                        <ul className="highlights-list">
                                            {previewPkg.highlights.map((highlight, i) => (
                                                <li key={i}><BiCheck /> {highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="modal-footer preview-actions">
                            <button className="action-btn edit" onClick={() => { openEditPkg(previewPkg); setPreviewPkg(null); }}>
                                <BiEditAlt /> Edit Package
                            </button>
                            <button className="action-btn delete" onClick={() => { deletePackage(previewPkg.id); setPreviewPkg(null); }}>
                                <BiTrash /> Delete Package
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* About Modal */}
            {isAboutModalOpen && (
                <div className="admin-modal-overlay" onClick={() => setIsAboutModalOpen(false)}>
                    <div className="admin-modal" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Edit About Us</h2>
                            <button className="modal-close" onClick={() => setIsAboutModalOpen(false)}><BiX /></button>
                        </div>
                        <form onSubmit={async (e) => {
                            await handleAboutSubmit(e);
                            setIsAboutModalOpen(false);
                        }} className="admin-pkg-form">
                            <div className="form-group">
                                <label>Our Mission</label>
                                <textarea
                                    rows="4"
                                    value={aboutData.mission}
                                    onChange={e => setAboutData({ ...aboutData, mission: e.target.value })}
                                    placeholder="Describe your company mission..."
                                    required
                                ></textarea>
                            </div>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Years of Service</label>
                                    <input
                                        type="text"
                                        value={aboutData.yearsOfService}
                                        onChange={e => setAboutData({ ...aboutData, yearsOfService: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Proprietor Name</label>
                                    <input
                                        type="text"
                                        value={aboutData.proprietorName}
                                        onChange={e => setAboutData({ ...aboutData, proprietorName: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Proprietor Message</label>
                                <textarea
                                    rows="3"
                                    value={aboutData.proprietorMessage}
                                    onChange={e => setAboutData({ ...aboutData, proprietorMessage: e.target.value })}
                                    required
                                ></textarea>
                            </div>

                            <div className="form-group full-width upload-group">
                                <label>Office/Fleet Image</label>
                                <div className="image-upload-wrapper">
                                    <div className="image-preview-box">
                                        {aboutImagePreview ? (
                                            <img src={aboutImagePreview} alt="Preview" />
                                        ) : (
                                            <div className="upload-placeholder">
                                                <BiCloudUpload />
                                                <span>No image</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="upload-controls">
                                        <input
                                            type="file"
                                            id="about-image-modal"
                                            accept="image/*"
                                            onChange={async (e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    setUploading(true);
                                                    try {
                                                        const compressed = await compressImage(file);
                                                        setAboutImagePreview(compressed);
                                                    } finally {
                                                        setUploading(false);
                                                    }
                                                }
                                            }}
                                            className="file-input-hidden"
                                        />
                                        <label htmlFor="about-image-modal" className="btn-upload">
                                            Choose Image
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn-cancel" onClick={() => setIsAboutModalOpen(false)} disabled={uploading}>Cancel</button>
                                <button type="submit" className="btn-save" disabled={uploading}>
                                    {uploading ? <BiLoaderAlt className="spin" /> : 'Save Changes'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* Toast Notification */}
            {toast.show && (
                <div className="toast-container">
                    <div className={`toast ${toast.type}`}>
                        <div className="toast-icon">
                            {toast.type === 'success' ? <BiCheck /> : <BiX />}
                        </div>
                        <div className="toast-message">{toast.message}</div>
                    </div>
                </div>
            )}

            {/* Custom Confirm Modal */}
            {confirmModal.show && (
                <div className="custom-confirm-overlay">
                    <div className="custom-alert-box">
                        <div className="alert-icon"><BiTrash /></div>
                        <h3 className="alert-title">{confirmModal.title}</h3>
                        <p className="alert-message">{confirmModal.message}</p>
                        <div className="alert-buttons">
                            <button className="alert-btn cancel" onClick={() => setConfirmModal({ ...confirmModal, show: false })}>Cancel</button>
                            <button className="alert-btn confirm" onClick={confirmModal.onConfirm}>Delete Now</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
