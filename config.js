// Konfiguracja aplikacji
const CONFIG = {
    // Ścieżka bazowa - zmień tutaj nazwę folderu na webhostingu
    BASE_PATH: '/dowod-realefekt/',
    
    // Inne ustawienia konfiguracyjne
    APP_NAME: 'mObywatel',
    VERSION: '4.52.0 (13)',
    CACHE_NAME: 'pobywatel'
};

// Funkcja do budowania pełnych ścieżek
function buildPath(path) {
    // Usuń początkowy slash jeśli istnieje
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return CONFIG.BASE_PATH + cleanPath;
}

// Funkcja do budowania ścieżek do plików HTML
function buildHtmlPath(pageName) {
    return buildPath(pageName + '.html');
}

// Funkcja do budowania ścieżek do zasobów
function buildAssetPath(assetPath) {
    return buildPath('assets/' + assetPath);
} 