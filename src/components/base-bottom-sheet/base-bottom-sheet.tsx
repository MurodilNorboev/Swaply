import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import {PropsWithChildren, RefObject, useCallback} from 'react';

type BaseBottomSheetProps = {
  bottomSheetRef: RefObject<BottomSheetModal>;
  snap: string | string[];
} & PropsWithChildren;


export const BaseBottomSheet = ({
  bottomSheetRef,
  snap,
  children,
}: BaseBottomSheetProps) => {
  const snapPoints = snap instanceof Array ? snap : [snap];
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        onPress={() => bottomSheetRef.current?.close()}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );
  return (
    <BottomSheetModal
      // maxDynamicContentSize={false}
      enableDynamicSizing={false}
      backdropComponent={renderBackdrop}
      ref={bottomSheetRef}
      snapPoints={snapPoints}>
      {children}
    </BottomSheetModal>
  );
};
