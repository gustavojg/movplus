import { GluestackUIProvider, Text, Box, HStack } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function Index() {
  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </GluestackUIProvider>
  );
}
