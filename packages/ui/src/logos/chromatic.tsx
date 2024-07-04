import { cn } from '@repo/utils';
import type { FC } from 'react';

interface ChromaticLogoProps {
  color?: 'white' | 'system';
  height?: number;
}

export const ChromaticLogo: FC<ChromaticLogoProps> = ({
  color = 'system',
  height,
}) => {
  return (
    <svg
      fill="none"
      height={height || 29}
      role="img"
      viewBox="0 0 149 29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Chromatic</title>
      <path
        className={cn(
          'ui-fill-[#333333] dark:ui-fill-white',
          color === 'white' && 'ui-fill-white',
        )}
        clipRule="evenodd"
        d="M116.268 17.73c0 1.274-1.199 2.077-2.882 2.077-1.484 0-2.283-.525-2.283-1.521 0-1.025.828-1.468 2.083-1.468h3.082v.913Zm-2.169-7.803c-2.497 0-3.916.83-4.966 2.014-.019.019-.037.04-.055.061l.03.029 2.081 1.165c.617-.528 1.442-.944 2.683-.944 1.54 0 2.396.774 2.396 2.629h-3.282c-2.71.028-4.708 1.078-4.708 3.487 0 2.602 1.941 3.681 4.309 3.681 1.769 0 2.909-.664 3.766-1.91l-.085 1.66h2.881v-6.863c0-3.432-2.168-5.009-5.05-5.009Zm32.595 8.297a3.643 3.643 0 0 1-2.768 1.26c-1.987 0-3.603-1.57-3.603-3.497 0-1.927 1.616-3.495 3.603-3.495 1.106 0 2.097.487 2.76 1.251l2.307-1.293a6.297 6.297 0 0 0-5.067-2.523c-3.451 0-6.247 2.714-6.247 6.06 0 3.348 2.796 6.062 6.247 6.062A6.297 6.297 0 0 0 149 19.516l-2.306-1.292Zm-101.21 0a3.643 3.643 0 0 1-2.768 1.26c-1.987 0-3.603-1.57-3.603-3.497 0-1.927 1.616-3.495 3.603-3.495 1.106 0 2.097.487 2.76 1.251l2.307-1.293a6.296 6.296 0 0 0-5.067-2.523c-3.451 0-6.247 2.714-6.247 6.06 0 3.348 2.796 6.062 6.247 6.062a6.299 6.299 0 0 0 5.074-2.533l-2.306-1.292Zm42.18-8.048h2.882l-.057 1.993c.8-1.467 2.026-2.242 3.567-2.242 1.74 0 2.882.802 3.509 2.214.941-1.384 2.367-2.214 4.107-2.214 2.825 0 4.507 1.827 4.507 4.787V21.8h-2.88v-6.808c0-1.606-.6-2.492-2.254-2.492-1.682 0-2.682.997-2.682 2.935V21.8h-2.88v-6.808c0-1.606-.572-2.492-2.226-2.492-1.713 0-2.711.997-2.711 2.935V21.8h-2.881V10.176Zm-37.79-6.724h2.88v8.772c.771-1.439 2.198-2.297 3.997-2.297 2.651 0 4.478 1.827 4.478 4.982v6.89h-2.883V15.13c0-1.66-.798-2.63-2.482-2.63-1.882 0-3.11 1.108-3.11 2.99v6.31h-2.88V3.452ZM79.13 9.927c-3.45 0-6.247 2.714-6.247 6.06 0 3.348 2.798 6.062 6.247 6.062 3.452 0 6.248-2.714 6.248-6.061s-2.796-6.061-6.248-6.061Zm0 2.565c1.989 0 3.606 1.568 3.606 3.495 0 1.928-1.617 3.497-3.606 3.497-1.986 0-3.603-1.57-3.603-3.497 0-1.927 1.617-3.495 3.603-3.495Zm-15.037-2.316h2.883l-.03 2.186c.8-1.826 2.17-2.408 3.482-2.408.614 0 1.097.1 1.509.27.162.065.501.223.83.463 0 0-.398.482-.75 1.068-.353.587-.59 1.216-.59 1.216-.457-.22-.914-.388-1.57-.388-1.712 0-2.881.969-2.881 3.571V21.8h-2.883V10.176Zm68.164 11.642h2.914V10.176h-2.914v11.642Zm-.458-16.16c0-1.052.886-1.829 1.915-1.829 1.028 0 1.914.777 1.914 1.83 0 1.108-.886 1.856-1.914 1.856-1.029 0-1.915-.748-1.915-1.856Zm-8.589 12.224v-5.35h-1.801v-2.355h1.801V3.452h2.885v6.725h3.2v2.356h-3.2v5.404c0 1.331.458 1.72 1.2 1.72.686 0 1.115-.306 1.429-.555l1.372 1.884c-.601.555-1.544 1.11-3.086 1.11-2.257 0-3.8-1.11-3.8-4.214Z"
        fillRule="evenodd"
      />
      <ellipse cx="14.587" cy="14.5" fill="#FC521F" rx="14.587" ry="14.5" />
      <path
        clipRule="evenodd"
        d="m18.015 21.168-2.318-1.329 6.974-3.998c.267-.154.519-.33.753-.526a4.024 4.024 0 0 1 .188 4.364 4.12 4.12 0 0 1-3.553 2.035 4.118 4.118 0 0 1-2.044-.546Zm-.558.961c.268.154.547.283.835.386a4.075 4.075 0 0 1-3.712 2.342c-2.258 0-4.096-1.825-4.096-4.069v-7.997l3.538 2.03v5.018c0 .198.107.381.28.48l3.155 1.81Zm-8.344-.416c-1.461 0-2.821-.779-3.551-2.034a4.019 4.019 0 0 1-.41-3.087 4.044 4.044 0 0 1 1.91-2.471l2.317-1.33v7.996c0 .307.027.611.08.912-.115.01-.23.014-.346.014Zm9.017-9.883-3.537 2.029-4.376-2.51a.562.562 0 0 0-.559 0l-3.155 1.81c-.267.153-.52.329-.754.526A4.026 4.026 0 0 1 5.56 9.32a4.12 4.12 0 0 1 3.553-2.036c.714 0 1.42.19 2.044.547l6.972 3.999Zm-3.55-7.687c2.26 0 4.097 1.825 4.097 4.07v2.658l-6.972-3.998a5.199 5.199 0 0 0-.836-.388 4.075 4.075 0 0 1 3.711-2.342Zm9.032 5.18a4.059 4.059 0 0 1-1.5 5.557L15.14 18.88v-4.057l4.375-2.51a.554.554 0 0 0 .28-.48v-3.62c0-.305-.028-.61-.08-.91a4.118 4.118 0 0 1 3.898 2.02Z"
        fill="#fff"
        fillRule="evenodd"
      />
    </svg>
  );
};
