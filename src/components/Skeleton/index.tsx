import React from 'react';
import {GradientProps, SkeletonContainer} from 'react-native-dynamic-skeletons';
import LinearGradient from 'react-native-linear-gradient';

const Gradient = (props: GradientProps) => <LinearGradient {...props} />;

interface SkeletonProps {
  isLoading: boolean;
  children: React.ReactElement;
}

//todo create multiple types of Skeleton

export const Skeleton: React.FC<SkeletonProps> = ({isLoading, children}) => {
  return (
    <SkeletonContainer isLoading={isLoading} Gradient={Gradient}>
      {children}
    </SkeletonContainer>
  );
};
