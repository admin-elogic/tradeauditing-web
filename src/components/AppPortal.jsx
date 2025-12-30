import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

// Mapeo de UIDs a links de Google Drive
// Añade aquí los usuarios autorizados con sus respectivos links
const USER_DRIVE_LINKS = {
    // Ejemplo: 'uid123456': 'https://drive.google.com/drive/folders/...'
    'default': 'https://drive.google.com/drive/folders/YOUR_DEFAULT_FOLDER'
};

const AppPortal = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleGoogleLogin = async () => {
        try {
            setError(null);
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error('Error al iniciar sesión:', err);
            setError('Error al iniciar sesión. Por favor intenta de nuevo.');
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error('Error al cerrar sesión:', err);
        }
    };

    const getDriveLink = () => {
        if (user && USER_DRIVE_LINKS[user.uid]) {
            return USER_DRIVE_LINKS[user.uid];
        }
        return USER_DRIVE_LINKS['default'];
    };

    const openDriveFolder = () => {
        window.open(getDriveLink(), '_blank', 'noopener,noreferrer');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-400"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
            {/* Header */}
            <header className="bg-navy-900/80 backdrop-blur-lg border-b border-navy-700 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <img
                                src="/logo-new.webp"
                                alt="TradeAuditing"
                                className="h-10 w-auto"
                                onError={(e) => { e.target.src = '/logo-new.png'; }}
                            />
                            <span className="text-xl font-bold text-white hidden sm:block">
                                TradeAuditing
                            </span>
                        </div>

                        {/* User Menu */}
                        {user && (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={user.photoURL || '/default-avatar.png'}
                                        alt={user.displayName}
                                        className="h-9 w-9 rounded-full border-2 border-primary-400"
                                    />
                                    <div className="hidden md:block">
                                        <p className="text-sm font-medium text-white">{user.displayName}</p>
                                        <p className="text-xs text-navy-400">{user.email}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 text-sm font-medium text-navy-300 hover:text-white bg-navy-800 hover:bg-navy-700 rounded-lg transition-all duration-200"
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {!user ? (
                    /* Login Card */
                    <div className="flex items-center justify-center min-h-[70vh]">
                        <div className="bg-navy-800/50 backdrop-blur-xl rounded-2xl border border-navy-700 p-8 sm:p-12 max-w-md w-full shadow-2xl">
                            <div className="text-center mb-8">
                                <img
                                    src="/logo-new.webp"
                                    alt="TradeAuditing"
                                    className="h-20 w-auto mx-auto mb-6"
                                    onError={(e) => { e.target.src = '/logo-new.png'; }}
                                />
                                <h1 className="text-3xl font-bold text-white mb-2">
                                    Portal de Auditorías
                                </h1>
                                <p className="text-navy-400">
                                    Accede a tus documentos de auditoría
                                </p>
                            </div>

                            {error && (
                                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
                                    {error}
                                </div>
                            )}

                            <button
                                onClick={handleGoogleLogin}
                                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        fill="#4285F4"
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    />
                                    <path
                                        fill="#EA4335"
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    />
                                </svg>
                                Continuar con Google
                            </button>

                            <p className="mt-6 text-center text-navy-500 text-sm">
                                Solo usuarios autorizados pueden acceder
                            </p>
                        </div>
                    </div>
                ) : (
                    /* Dashboard */
                    <div className="space-y-8">
                        {/* Welcome Banner */}
                        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 shadow-xl">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        ¡Bienvenido, {user.displayName?.split(' ')[0]}!
                                    </h2>
                                    <p className="text-primary-100">
                                        Accede a tus documentos de auditoría de comercio exterior
                                    </p>
                                </div>
                                <img
                                    src="/logo-new.webp"
                                    alt="TradeAuditing"
                                    className="h-16 w-auto opacity-50"
                                    onError={(e) => { e.target.src = '/logo-new.png'; }}
                                />
                            </div>
                        </div>

                        {/* Main Action Card */}
                        <div className="bg-navy-800/50 backdrop-blur-xl rounded-2xl border border-navy-700 p-8 shadow-xl">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-600/20 rounded-full mb-6">
                                    <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Tus Documentos de Auditoría
                                </h3>
                                <p className="text-navy-400 mb-8 max-w-md mx-auto">
                                    Accede a tu carpeta personalizada de Google Drive donde encontrarás
                                    todos tus reportes de auditoría y documentos relacionados.
                                </p>

                                <button
                                    onClick={openDriveFolder}
                                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-bold text-xl py-6 px-12 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                                >
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Ir a mis Auditorías
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </button>

                                <p className="mt-6 text-navy-500 text-sm">
                                    Se abrirá en una nueva pestaña
                                </p>
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-navy-800/30 backdrop-blur rounded-xl border border-navy-700 p-6">
                                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">Auditorías Completas</h4>
                                <p className="text-navy-400 text-sm">
                                    Todos tus reportes de auditoría validados y listos para consulta.
                                </p>
                            </div>

                            <div className="bg-navy-800/30 backdrop-blur rounded-xl border border-navy-700 p-6">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">Acceso Seguro</h4>
                                <p className="text-navy-400 text-sm">
                                    Tus documentos están protegidos con autenticación de Google.
                                </p>
                            </div>

                            <div className="bg-navy-800/30 backdrop-blur rounded-xl border border-navy-700 p-6">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">Soporte 24/7</h4>
                                <p className="text-navy-400 text-sm">
                                    ¿Necesitas ayuda? Contáctanos vía WhatsApp en cualquier momento.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-navy-900/80 border-t border-navy-800 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-navy-500 text-sm">
                            © 2025 TradeAuditing. Todos los derechos reservados.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="https://tradeauditing.com" className="text-navy-400 hover:text-white text-sm transition-colors">
                                Sitio Principal
                            </a>
                            <a href="https://tradeauditing.com/privacidad" className="text-navy-400 hover:text-white text-sm transition-colors">
                                Privacidad
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AppPortal;
