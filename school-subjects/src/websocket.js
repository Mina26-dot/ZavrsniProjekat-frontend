const WS_URL = 'ws://localhost:3000/ws'; // URL tvoje WebSocket server konekcije

let websocket = null;

// Funkcija za uspostavljanje WebSocket konekcije
export const connectWebSocket = (onMessageCallback) => {
    if (websocket) {
        console.log('WebSocket is already connected.');
        return;
    }

    websocket = new WebSocket(WS_URL);

    websocket.onopen = () => {
        console.log('WebSocket connection opened.');
    };

    websocket.onmessage = (event) => {
        console.log('Message received from WebSocket:', event.data);
        if (onMessageCallback) {
            onMessageCallback(event.data);
        }
    };

    websocket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    websocket.onclose = () => {
        console.log('WebSocket connection closed.');
        websocket = null;
    };
};

// Funkcija za slanje poruka preko WebSocket-a
export const sendMessage = (message) => {
    if (websocket && websocket.readyState === WebSocket.OPEN) {
        websocket.send(message);
        console.log('Message sent:', message);
    } else {
        console.warn('WebSocket is not open. Message not sent.');
    }
};

// Funkcija za zatvaranje WebSocket konekcije
export const closeWebSocket = () => {
    if (websocket) {
        websocket.close();
        console.log('WebSocket connection closed by client.');
    }
};