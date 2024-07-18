import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
        <Drawer.Screen
          name="CreateStory"
          options={{
            drawerLabel: "CreateStory",
            title: "Create Story",
          }}
        />
        <Drawer.Screen
          name="Story/[StoryDetail]"
          options={{
            drawerLabel: "StoryDetail",
            title: "StoryDetail",
          }}
        />
        <Drawer.Screen
          name="Settings"
          options={{
            drawerLabel: "Settings",
            title: "Settings",
          }}
        />
        <Drawer.Screen
          name="StoryPage/[id]"
          options={{
            drawerLabel: "StoryPage",
            title: "Story",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
