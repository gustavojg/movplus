import React, { useRef, useState } from 'react';
import { View, StyleSheet, PanResponder, Dimensions } from 'react-native';
import { Canvas, Path, Skia, SkPath, Group, Paint, BlendMode } from '@shopify/react-native-skia';

const { width } = Dimensions.get('window');
const pageWidth = width - 40;
const pageHeight = pageWidth * 1.5;

const PageTurner = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        setDragX(gestureState.dx);
        setDragY(gestureState.dy);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 100) {
          setCurrentPage((prev) => (prev === 0 ? 1 : 0));
          setDragX(0);
          setDragY(0);
        } else {
          setDragX(0);
          setDragY(0);
        }
      },
    })
  ).current;

  const pagePath = Skia.Path.Make();
  const pageRect = Skia.XYWHRect(0, 0, pageWidth, pageHeight);
  pagePath.addRect(pageRect);

  const createPagePath = (color) => {
    const path = Skia.Path.Make();
    path.addRect(pageRect);
    return { path, color };
  };

  const pages = [
    createPagePath('lightblue'),
    createPagePath('lightgreen')
  ];

  const pageTurnPath = Skia.Path.Make();
  pageTurnPath.moveTo(0, 0);
  pageTurnPath.lineTo(pageWidth, 0);
  pageTurnPath.lineTo(pageWidth - dragX, pageHeight + dragY);
  pageTurnPath.lineTo(0, pageHeight);
  pageTurnPath.close();

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Canvas style={{ width: pageWidth, height: pageHeight }}>
        <Group>
          <Path path={pages[currentPage].path} color={pages[currentPage].color} />
          <Path path={pageTurnPath} color="white" blendMode="darken" />
        </Group>
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PageTurner;
