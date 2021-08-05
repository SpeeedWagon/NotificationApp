import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "notificationapp",
  webDir: "dist",
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      smallIcon: "icon",
      iconColor: "#488AFF",
      sound: "sound.wav",
    },
  },
};

export default config;
