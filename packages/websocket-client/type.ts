export enum MsgType {
    MSG_FAMILY_SUBSCRIBE = 1,        // 消息订阅
    MSG_FAMILY_UNSUBSCRIBE,          // 取消消息订阅
    MSG_FAMILY_TRANSMIT,             // 消息转发
    MSG_FAMILY_HEARTBEAT,            // 心跳消息
    MSG_FAMILY_HEARTBEAT_FEEDBACK,   // 心跳反馈消息
    MSG_FAMILY_REGISTER                // 网络消息注册
}