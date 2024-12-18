'use client';

import clsx from 'clsx';
import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';
import StudioToast from './StudioToast';
import { useState, useMemo, useEffect } from 'react';
import { MyStudioFormData } from '@app/studio/my/features/MyStudioForm';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    data: MyStudioFormData;
    update: (data: MyStudioFormData) => void;
  }>;

const StudioUpdateButton = ({ children, update, data }: Props) => {
  const [isshowToast, setIsShowToast] = useState<boolean>(false);
  const [originalData, setOriginalData] = useState<MyStudioFormData | null>(null);

  useEffect(() => {
    if (!originalData && data.title !== '') {
      setOriginalData(data);
    }
  }, [data]);

  const isDataChanged = useMemo(() => {
    if (!originalData) return false;

    return (
      data.title !== originalData.title ||
      data.contentCategory !== originalData.contentCategory ||
      data.moodCategory !== originalData.moodCategory ||
      data.tags.length !== originalData.tags.length ||
      data.tags.some((tag, index) => tag !== originalData.tags[index]) ||
      (data.thumbnail || '') !== (originalData.thumbnail || '')
    );
  }, [data, originalData]);

  const fetchData = () => {
    if (data.title.length >= 1) {
      setIsShowToast(true);
      update(data);
      setOriginalData(data);
    }
  };

  const closeToast = () => {
    setIsShowToast(false);
  };

  return (
    <button
      className={clsx(
        'flex h-11 w-full items-center justify-center rounded-md px-1 py-0.5',
        'funch-bold14 text-content-static-white bg-surface-brand-base hover:bg-surface-brand-strong',
        'mt-4 opacity-100 disabled:opacity-35',
      )}
      onClick={fetchData}
      disabled={!isDataChanged}
    >
      {isshowToast && (
        <StudioToast open={isshowToast} close={closeToast}>
          변경되었습니다.
        </StudioToast>
      )}
      {children}
    </button>
  );
};

export default StudioUpdateButton;
