
declare module '@qs/websocket-client' {
    export interface WebSocketClientOptions {
        heartbeatInterval: number;
        maxReconnectTimes: number;
        reconnectInterval: number;
        busName: string;
        appName: string;
        msgTypes: number[];
    }

    export class WebSocketClient {
        constructor(url: string, options: WebSocketClientOptions);
        connect(): void;
        sendMessage(busName: string, msgType: number, data: any): void;
        close(code?: number, reason?: string): void;
        subscribe(busName: string, msgTypes: number[], callback?: any): void;
        unSubscribe(busName: string, msgTypes: number[], callback?: any): void;

    }

}
