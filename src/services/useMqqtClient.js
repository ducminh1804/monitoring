import mqtt from "mqtt";
import { useEffect, useState } from "react";

export default function useMqttClient() {
  const [client, setClient] = useState(null);
  const [connectStatus, setConnectStatus] = useState("Disconnected");
  const [payload, setPayload] = useState(null);

  const mqttConnect = (host, mqttOption) => {
    setConnectStatus("Connecting");
    const mqttClient = mqtt.connect(host, mqttOption);
    setClient(mqttClient);
  };

  const mqttDisconnect = () => {
    if (client) {
      client.end(() => {
        setConnectStatus("Disconnected");
      });
    }
  };

  const subscribe = (topic) => {
    if (client) {
      client.subscribe(topic, (err) => {
        if (err) {
          console.error("Subscribe error:", err);
        } else {
          console.log(`Subscribed to topic: ${topic}`);
        }
      });
    }
  };

  const publish = (topic, message) => {
    if (client) {
      client.publish(topic, message, {}, (err) => {
        if (err) console.error("Publish error:", err);
      });
    }
  };

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        setConnectStatus("Connected");
      });

      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });

      client.on("reconnect", () => {
        setConnectStatus("Reconnecting");
      });

      client.on("message", (topic, message) => {
          setPayload(message.toString());
      });
    }

    return () => {
      if (client) {
        client.end();
      }
    };
  }, [client]);

  return {
    client,
    connectStatus,
    payload,
    mqttConnect,
    mqttDisconnect,
    subscribe,
    publish,
  };
}
