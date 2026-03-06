import * as React from "react";
import { SVGProps } from "react";

export const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.3263 1.90381H21.6998L14.3297 10.3273L23 21.7898H16.2112L10.894 14.8378L4.80995 21.7898H1.43443L9.31743 12.7799L1 1.90381H7.96111L12.7674 8.25814L18.3263 1.90381ZM17.1423 19.7706H19.0116L6.94539 3.81694H4.93946L17.1423 19.7706Z"
      fill="#BABABA"
    />
  </svg>
);

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_18641_398)">
      <path
        d="M12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12C24 5.37264 18.6274 0 12 0Z"
        fill="#BABABA"
      />
    </g>
    <defs>
      <clipPath id="clip0_18641_398">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_18641_400)">
      <path
        d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
        fill="#BABABA"
      />
      <path
        d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
        fill="#BABABA"
      />
      <path
        d="M19.8469 5.5919C19.8469 6.38877 19.2 7.03096 18.4078 7.03096C17.6109 7.03096 16.9688 6.38408 16.9688 5.5919C16.9688 4.79502 17.6156 4.15283 18.4078 4.15283C19.2 4.15283 19.8469 4.79971 19.8469 5.5919Z"
        fill="#BABABA"
      />
    </g>
    <defs>
      <clipPath id="clip0_18641_400">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_18641_401)">
      <path
        d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
        fill="#BABABA"
      />
    </g>
    <defs>
      <clipPath id="clip0_18641_401">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CheckedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={28} height={28} rx={14} fill="#EDEEF1" />
    <g clipPath="url(#clip0_19632_250)">
      <path
        d="M8.5 15L12 18.5L20 10.5"
        stroke="#0C2A46"
        strokeWidth={2.33}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_19632_250">
        <rect width={16} height={16} fill="white" transform="translate(6 6)" />
      </clipPath>
    </defs>
  </svg>
);

export const VerifiedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={24} fill="#EDEEF1" />
    <path
      d="M22.49 14.2301L17.5 16.1101C16.35 16.5401 15.41 17.9001 15.41 19.1201V26.5501C15.41 27.7301 16.19 29.2801 17.14 29.9901L21.44 33.2001C22.85 34.2601 25.17 34.2601 26.58 33.2001L30.88 29.9901C31.83 29.2801 32.61 27.7301 32.61 26.5501V19.1201C32.61 17.8901 31.67 16.5301 30.52 16.1001L25.53 14.2301C24.68 13.9201 23.32 13.9201 22.49 14.2301Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.05 23.8702L22.66 25.4802L26.96 21.1802"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const QualityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={24} fill="#EDEEF1" />
    <path
      d="M31.86 20.0901C31.86 20.5101 31.83 20.9201 31.78 21.3101C31.32 21.1101 30.82 21.0001 30.29 21.0001C29.07 21.0001 27.99 21.5901 27.32 22.4901C26.64 21.5901 25.56 21.0001 24.34 21.0001C22.29 21.0001 20.63 22.6701 20.63 24.7401C20.63 27.4201 22.05 29.4701 23.63 30.8601C23.58 30.8901 23.53 30.9001 23.48 30.9201C23.18 31.0301 22.68 31.0301 22.38 30.9201C19.79 30.0301 14 26.3501 14 20.0901C14 17.3301 16.22 15.1001 18.96 15.1001C20.59 15.1001 22.03 15.8801 22.93 17.0901C23.84 15.8801 25.28 15.1001 26.9 15.1001C29.64 15.1001 31.86 17.3301 31.86 20.0901Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34 24.74C34 29.42 29.67 32.18 27.73 32.84C27.5 32.92 27.13 32.92 26.9 32.84C26.07 32.56 24.8 31.89 23.63 30.86C22.05 29.47 20.63 27.42 20.63 24.74C20.63 22.67 22.29 21 24.34 21C25.56 21 26.64 21.59 27.32 22.49C27.99 21.59 29.07 21 30.29 21C30.82 21 31.32 21.11 31.78 21.31C33.09 21.89 34 23.2 34 24.74Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GuidanceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={24} fill="#EDEEF1" />
    <path
      d="M20 14V17"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28 14V17"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33 20.5V25.63C32.11 24.92 30.98 24.5 29.75 24.5C28.52 24.5 27.37 24.93 26.47 25.66C25.26 26.61 24.5 28.1 24.5 29.75C24.5 30.73 24.78 31.67 25.26 32.45C25.63 33.06 26.11 33.59 26.68 34H20C16.5 34 15 32 15 29V20.5C15 17.5 16.5 15.5 20 15.5H28C31.5 15.5 33 17.5 33 20.5Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 23H25"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 28H21.62"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35 29.75C35 30.73 34.72 31.67 34.24 32.45C33.96 32.93 33.61 33.35 33.2 33.69C32.28 34.51 31.08 35 29.75 35C28.6 35 27.54 34.63 26.68 34C26.11 33.59 25.63 33.06 25.26 32.45C24.78 31.67 24.5 30.73 24.5 29.75C24.5 28.1 25.26 26.61 26.47 25.66C27.37 24.93 28.52 24.5 29.75 24.5C30.98 24.5 32.11 24.92 33 25.63C34.22 26.59 35 28.08 35 29.75Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.75 32.25C29.75 30.87 30.87 29.75 32.25 29.75C30.87 29.75 29.75 28.63 29.75 27.25C29.75 28.63 28.63 29.75 27.25 29.75C28.63 29.75 29.75 30.87 29.75 32.25Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const GlobeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={24} fill="#EDEEF1" />
    <path
      d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 15H21C19.05 20.84 19.05 27.16 21 33H20"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27 15C28.95 20.84 28.95 27.16 27 33"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 28V27C20.84 28.95 27.16 28.95 33 27V28"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 21.0001C20.84 19.0501 27.16 19.0501 33 21.0001"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const VettedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={24} fill="#EDEEF1" />
    <path
      d="M22.49 14.2301L17.5 16.1101C16.35 16.5401 15.41 17.9001 15.41 19.1201V26.5501C15.41 27.7301 16.19 29.2801 17.14 29.9901L21.44 33.2001C22.85 34.2601 25.17 34.2601 26.58 33.2001L30.88 29.9901C31.83 29.2801 32.61 27.7301 32.61 26.5501V19.1201C32.61 17.8901 31.67 16.5301 30.52 16.1001L25.53 14.2301C24.68 13.9201 23.32 13.9201 22.49 14.2301Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 24.5C25.1046 24.5 26 23.6046 26 22.5C26 21.3954 25.1046 20.5 24 20.5C22.8954 20.5 22 21.3954 22 22.5C22 23.6046 22.8954 24.5 24 24.5Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 24.5V27.5"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SearchGlobe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={24} fill="#EDEEF1" />
    <path
      d="M34 24C34 18.48 29.52 14 24 14C18.48 14 14 18.48 14 24C14 29.52 18.48 34 24 34"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.0001 15H21.0001C19.0501 20.84 19.0501 27.16 21.0001 33H20.0001"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27 15C27.97 17.92 28.46 20.96 28.46 24"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 28V27C17.92 27.97 20.96 28.46 24 28.46"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 21C20.84 19.05 27.16 19.05 33 21"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30.2 33.4C31.9673 33.4 33.4 31.9673 33.4 30.2C33.4 28.4327 31.9673 27 30.2 27C28.4327 27 27 28.4327 27 30.2C27 31.9673 28.4327 33.4 30.2 33.4Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34 34L33 33"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ListIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={24} fill="#EDEEF1" />
    <path
      d="M33 19V29C33 32 31.5 34 28 34H20C16.5 34 15 32 15 29V19C15 16 16.5 14 20 14H28C31.5 14 33 16 33 19Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.5 16.5V18.5C26.5 19.6 27.4 20.5 28.5 20.5H30.5"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 25H24"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 29H28"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BuildIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={24} fill="#EDEEF1" />
    <path
      d="M14 34H34"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.01 33.99L15.01 34.01L15 19.07C15 18.4 15.34 17.7799 15.89 17.4099L19.89 14.74C20.56 14.29 21.44 14.29 22.11 14.74L26.11 17.4099C26.67 17.7799 27 18.4 27 19.07L27.01 33.99Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M31.98 34.01V30"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 24C30.9 24 30 24.9 30 26V28C30 29.1 30.9 30 32 30C33.1 30 34 29.1 34 28V26C34 24.9 33.1 24 32 24Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 26H27"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 34V30.25"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 22.5C21.8284 22.5 22.5 21.8284 22.5 21C22.5 20.1716 21.8284 19.5 21 19.5C20.1716 19.5 19.5 20.1716 19.5 21C19.5 21.8284 20.1716 22.5 21 22.5Z"
      stroke="#0C2A46"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
