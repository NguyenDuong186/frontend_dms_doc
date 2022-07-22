import React from 'react'
interface IconProps {
  className?: string
}

export function IconNotebook({ className }: IconProps): React.ReactElement<IconProps> {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M19 3.022V1a1 1 0 00-2 0v1.1a5 5 0 00-1-.1h-1V1a1 1 0 00-2 0v1h-2V1a1 1 0 00-2 0v1H8a5 5 0 00-1 .1V1a1 1 0 00-2 0v2.022A4.979 4.979 0 003 7v12a5.006 5.006 0 005 5h8a5.006 5.006 0 005-5V7a4.979 4.979 0 00-2-3.978zM19 19a3 3 0 01-3 3H8a3 3 0 01-3-3V7a3 3 0 013-3h8a3 3 0 013 3zM17 8a1 1 0 01-1 1H8a1 1 0 010-2h8a1 1 0 011 1zm0 4a1 1 0 01-1 1H8a1 1 0 010-2h8a1 1 0 011 1zm-4 4a1 1 0 01-1 1H8a1 1 0 010-2h4a1 1 0 011 1z"></path>
    </svg>
  )
}
export function IconSignIn({ className }: IconProps): React.ReactElement<IconProps> {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M19 3.022V1a1 1 0 00-2 0v1.1a5 5 0 00-1-.1h-1V1a1 1 0 00-2 0v1h-2V1a1 1 0 00-2 0v1H8a5 5 0 00-1 .1V1a1 1 0 00-2 0v2.022A4.979 4.979 0 003 7v12a5.006 5.006 0 005 5h8a5.006 5.006 0 005-5V7a4.979 4.979 0 00-2-3.978zM19 19a3 3 0 01-3 3H8a3 3 0 01-3-3V7a3 3 0 013-3h8a3 3 0 013 3zM17 8a1 1 0 01-1 1H8a1 1 0 010-2h8a1 1 0 011 1zm0 4a1 1 0 01-1 1H8a1 1 0 010-2h8a1 1 0 011 1zm-4 4a1 1 0 01-1 1H8a1 1 0 010-2h4a1 1 0 011 1z"></path>
    </svg>
  )
}

export function IconApps({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M85.333 0h64c47.128 0 85.333 38.205 85.333 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64C38.205 234.667 0 196.462 0 149.333v-64C0 38.205 38.205 0 85.333 0zM362.667 0h64C473.795 0 512 38.205 512 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64c-47.128 0-85.333-38.205-85.333-85.333v-64C277.333 38.205 315.538 0 362.667 0zM85.333 277.333h64c47.128 0 85.333 38.205 85.333 85.333v64c0 47.128-38.205 85.333-85.333 85.333h-64C38.205 512 0 473.795 0 426.667v-64c0-47.129 38.205-85.334 85.333-85.334zM362.667 277.333h64c47.128 0 85.333 38.205 85.333 85.333v64C512 473.795 473.795 512 426.667 512h-64c-47.128 0-85.333-38.205-85.333-85.333v-64c-.001-47.129 38.204-85.334 85.333-85.334z"></path>
    </svg>
  )
}
export function PowerApps({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      x="0"
      y="0"
      enableBackground="new 0 0 512.301 512.301"
      version="1.1"
      viewBox="0 0 512.301 512.301"
      xmlSpace="preserve"
    >
      <path d="M320.119 82.112a21.76 21.76 0 0013.419 19.755c71.67 31.535 117.01 103.433 114.581 181.696-1.72 106.039-89.076 190.605-195.115 188.885-106.039-1.72-190.606-89.076-188.885-195.115.101-76.006 45.028-144.798 114.581-175.445a21.824 21.824 0 0013.419-19.797c.019-11.782-9.518-21.348-21.3-21.367a21.335 21.335 0 00-8.012 1.548C43.898 113.824-10.705 252.01 40.848 370.919S230.586 544.43 349.495 492.878c118.909-51.552 173.511-189.738 121.959-308.647A234.67 234.67 0 00349.495 62.272c-10.913-4.442-23.36.804-27.802 11.716a21.325 21.325 0 00-1.574 8.124z"></path>
      <path d="M256.119 0c11.782 0 21.333 9.551 21.333 21.333v128c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333v-128C234.785 9.551 244.337 0 256.119 0z"></path>
    </svg>
  )
}

export function DocumentSigned({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M21 6.243a3.975 3.975 0 00-1.172-2.829l-2.242-2.242A4.022 4.022 0 0014.758 0H6a3 3 0 00-3 3v21h18zm-2.586-1.415a1.923 1.923 0 01.141.172H16V2.445a1.923 1.923 0 01.172.141zM5 22V3a1 1 0 011-1h8v5h5v15zM8 9h8v2H8zm0 4h8v2H8zm6.018 3.814l1.965.366c-.191 1.047-1.005 2.82-2.848 2.82a3.154 3.154 0 01-1.986-.706c-.314-.223-.424-.294-.662-.294a2.18 2.18 0 00-.916.66l-1.5-1.317A3.749 3.749 0 0110.487 17a2.925 2.925 0 011.821.664 1.235 1.235 0 00.827.336c.623 0 .88-1.173.883-1.186z"></path>
    </svg>
  )
}
export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24">
      <path
        d="M24 22.586l-6.262-6.262a10.016 10.016 0 10-1.414 1.414L22.586 24zM10 18a8 8 0 118-8 8.009 8.009 0 01-8 8z"
        data-name="01 align center"
      ></path>
    </svg>
  )
}

export function AddIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10zm5-10a1 1 0 01-1 1h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 012 0v3h3a1 1 0 011 1z"></path>
    </svg>
  )
}
export function EditAltIcon({ className }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24">
      <g data-name="01 align center">
        <path d="M22 9.979V16h-6v6H2V3a1 1 0 011-1h13.148L17.359.646A4.934 4.934 0 0118.07 0H3a3 3 0 00-3 3v21h18.414L24 18.414V7.979zm-4 11.607V18h3.586z"></path>
        <path d="M12.729 11.82l7.611-8.507a.945.945 0 011.372-.038.943.943 0 010 1.335l-8.032 8.033a4.964 4.964 0 011.042 1.785l8.4-8.4a2.947 2.947 0 000-4.163 2.943 2.943 0 00-4.276.118l-8.136 9.093a4.967 4.967 0 012.019.744zM10 13c-4 0-5 6-5 6h5a3 3 0 000-6z"></path>
      </g>
    </svg>
  )
}
export function DeleteIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M15.207 14.207L13.414 16l1.793 1.793a1 1 0 11-1.414 1.414L12 17.414l-1.793 1.793a1 1 0 01-1.414-1.414L10.586 16l-1.793-1.793a1 1 0 011.414-1.414L12 14.586l1.793-1.793a1 1 0 011.414 1.414zM22 10.485V19a5.006 5.006 0 01-5 5H7a5.006 5.006 0 01-5-5V5a5.006 5.006 0 015-5h4.515a6.958 6.958 0 014.95 2.05l3.484 3.486A6.951 6.951 0 0122 10.485zm-6.949-7.021A5.01 5.01 0 0014 2.684V7a1 1 0 001 1h4.316a4.983 4.983 0 00-.781-1.05zM20 10.485c0-.165-.032-.323-.047-.485H15a3 3 0 01-3-3V2.047c-.162-.015-.321-.047-.485-.047H7a3 3 0 00-3 3v14a3 3 0 003 3h10a3 3 0 003-3z"></path>
    </svg>
  )
}
export function DownloadIcon({ className }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24">
      <path d="M9.878 18.122a3 3 0 004.244 0l3.211-3.211a1 1 0 00-1.414-1.411l-2.926 2.927L13 1a1 1 0 00-1-1 1 1 0 00-1 1l-.009 15.408-2.91-2.908a1 1 0 00-1.414 1.415z"></path>
      <path d="M23 16a1 1 0 00-1 1v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-4a1 1 0 00-1-1 1 1 0 00-1 1v4a3 3 0 003 3h18a3 3 0 003-3v-4a1 1 0 00-1-1z"></path>
    </svg>
  )
}
export function FilterIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      width="512"
      height="512"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M14 24a1 1 0 01-.6-.2l-4-3A1 1 0 019 20v-5.62L1.984 6.487A3.9 3.9 0 014.9 0h14.2a3.9 3.9 0 012.913 6.488L15 14.38V23a1 1 0 01-1 1zm-3-4.5l2 1.5v-7a1 1 0 01.253-.664l7.268-8.177A1.9 1.9 0 0019.1 2H4.9a1.9 1.9 0 00-1.421 3.158l7.269 8.178A1 1 0 0111 14z"></path>
    </svg>
  )
}
export function CaretRight({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Isolation Mode"
      viewBox="0 0 24 24"
    >
      <path d="M9.707 19.293v-14L16 11.586A1 1 0 0116 13z"></path>
    </svg>
  )
}
export function HandlerIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5312 4.96875L13.0312 0.46875C12.0938 -0.46875 10.5 0.1875 10.5 1.53125V3.3125C9.15625 3.375 7.84375 3.5 6.71875 3.875C5.625 4.21875 4.75 4.71875 4.125 5.40625C3.375 6.25 3 7.28125 3 8.5C3 10.4375 4.03125 12.0312 5.625 13.0312C6.8125 13.7812 8.3125 12.6562 7.84375 11.2812C7.375 9.8125 7.3125 9.09375 10.5 8.84375V10.5C10.5 11.8437 12.0938 12.5 13.0313 11.5625L17.5312 7.0625C18.125 6.5 18.125 5.53125 17.5312 4.96875ZM12 10.5V7.28125C7.96875 7.34375 5.1875 8 6.4375 11.75C5.5 11.1875 4.5 10.1562 4.5 8.5C4.5 5.09375 8.53125 4.78125 12 4.78125V1.5L16.5 6L12 10.5ZM12.75 13.1562C12.5938 13.1875 12.5 13.3437 12.5 13.5312V14.3125C12.5 14.4375 12.4063 14.5 12.3125 14.5L1.6875 14.5C1.5625 14.5 1.5 14.4375 1.5 14.3125L1.5 3.6875C1.5 3.59375 1.5625 3.5 1.6875 3.5L4.375 3.5C4.40625 3.5 4.5 3.5 4.5625 3.46875C4.9375 3.25 5.3125 3.03125 5.75 2.875C5.90625 2.8125 6 2.6875 6 2.53125V2.375C6 2.1875 5.8125 2 5.625 2L1.5 2C0.65625 2 0 2.6875 0 3.5L0 14.5C0 15.3438 0.65625 16 1.5 16L12.5 16C13.3125 16 14 15.3437 14 14.5V13.1875C14 12.9062 13.6563 12.7187 13.4063 12.875C13.25 12.9687 12.9375 13.0937 12.75 13.1562Z"
        fill="#40A9FF"
      />
    </svg>
  )
}

export function CompleteIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.58214 0 0 3.58214 0 8C0 12.4179 3.58214 16 8 16C12.4179 16 16 12.4179 16 8C16 3.58214 12.4179 0 8 0ZM11.4554 5.3875L7.69464 10.6018C7.64208 10.6751 7.57279 10.7349 7.49251 10.7762C7.41224 10.8174 7.32329 10.8389 7.23304 10.8389C7.14279 10.8389 7.05384 10.8174 6.97356 10.7762C6.89328 10.7349 6.82399 10.6751 6.77143 10.6018L4.54464 7.51607C4.47679 7.42143 4.54464 7.28929 4.66071 7.28929H5.49821C5.68036 7.28929 5.85357 7.37679 5.96071 7.52679L7.23214 9.29107L10.0393 5.39821C10.1464 5.25 10.3179 5.16071 10.5018 5.16071H11.3393C11.4554 5.16071 11.5232 5.29286 11.4554 5.3875Z"
        fill="#52C41A"
      />
    </svg>
  )
}

export function CrossCircle({ className }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24">
      <g data-name="01 align center">
        <path d="M15.293 7.293L12 10.586 8.707 7.293 7.293 8.707 10.586 12 7.293 15.293 8.707 16.707 12 13.414 15.293 16.707 16.707 15.293 13.414 12 16.707 8.707 15.293 7.293z"></path>
        <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z"></path>
      </g>
    </svg>
  )
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2588 10.2604C11.6727 10.0381 12.1465 9.91151 12.6511 9.91151H12.6528C12.7041 9.91151 12.7281 9.84993 12.6904 9.81572C12.1657 9.3448 11.5663 8.96444 10.9167 8.69024C10.9098 8.68682 10.903 8.68511 10.8962 8.68169C11.9584 7.91027 12.6494 6.6565 12.6494 5.24195C12.6494 2.89861 10.7542 1 8.41599 1C6.07778 1 4.1843 2.89861 4.1843 5.24195C4.1843 6.6565 4.87533 7.91027 5.93924 8.68169C5.9324 8.68511 5.92555 8.68682 5.91871 8.69024C5.15414 9.01352 4.46824 9.47705 3.87813 10.0689C3.29143 10.6545 2.82434 11.3488 2.50292 12.1129C2.18668 12.8611 2.016 13.6628 2.00004 14.475C1.99959 14.4933 2.00279 14.5114 2.00946 14.5284C2.01613 14.5454 2.02614 14.5609 2.03889 14.574C2.05164 14.5871 2.06688 14.5975 2.08371 14.6045C2.10054 14.6116 2.11862 14.6153 2.13688 14.6153H3.16145C3.235 14.6153 3.29657 14.5554 3.29828 14.4819C3.33249 13.1614 3.86103 11.9247 4.79665 10.9874C5.76306 10.0176 7.04933 9.48389 8.4177 9.48389C9.38753 9.48389 10.318 9.75244 11.1202 10.2553C11.1408 10.2683 11.1645 10.2756 11.1888 10.2765C11.2131 10.2774 11.2373 10.2718 11.2588 10.2604ZM8.4177 8.18394C7.63431 8.18394 6.8971 7.87777 6.3412 7.32187C6.06768 7.04907 5.85085 6.72484 5.70319 6.36787C5.55553 6.01091 5.47996 5.62825 5.48083 5.24195C5.48083 4.45684 5.78701 3.71792 6.3412 3.16202C6.89539 2.60612 7.6326 2.29995 8.4177 2.29995C9.2028 2.29995 9.9383 2.60612 10.4942 3.16202C10.7677 3.43483 10.9845 3.75905 11.1322 4.11602C11.2799 4.47299 11.3554 4.85564 11.3546 5.24195C11.3546 6.02705 11.0484 6.76597 10.4942 7.32187C9.9383 7.87777 9.20109 8.18394 8.4177 8.18394ZM14.7088 12.2548H13.272V10.8181C13.272 10.7428 13.2104 10.6812 13.1352 10.6812H12.1773C12.102 10.6812 12.0405 10.7428 12.0405 10.8181V12.2548H10.6037C10.5284 12.2548 10.4668 12.3164 10.4668 12.3917V13.3495C10.4668 13.4248 10.5284 13.4864 10.6037 13.4864H12.0405V14.9232C12.0405 14.9984 12.102 15.06 12.1773 15.06H13.1352C13.2104 15.06 13.272 14.9984 13.272 14.9232V13.4864H14.7088C14.784 13.4864 14.8456 13.4248 14.8456 13.3495V12.3917C14.8456 12.3164 14.784 12.2548 14.7088 12.2548Z"
        fill="#1890FF"
      />
    </svg>
  )
}

export function EditIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.67246 12.2188C2.70762 12.2188 2.74277 12.2152 2.77793 12.21L5.73457 11.6914C5.76973 11.6844 5.80313 11.6686 5.82773 11.6422L13.2791 4.19082C13.2954 4.17456 13.3083 4.15524 13.3171 4.13398C13.326 4.11271 13.3305 4.08992 13.3305 4.06689C13.3305 4.04387 13.326 4.02108 13.3171 3.99981C13.3083 3.97855 13.2954 3.95923 13.2791 3.94297L10.3576 1.01973C10.3242 0.986328 10.2803 0.96875 10.2328 0.96875C10.1854 0.96875 10.1414 0.986328 10.108 1.01973L2.65664 8.47109C2.63027 8.49746 2.61445 8.5291 2.60742 8.56426L2.08887 11.5209C2.07177 11.6151 2.07788 11.712 2.10667 11.8033C2.13546 11.8945 2.18606 11.9774 2.2541 12.0447C2.37012 12.1572 2.51602 12.2188 2.67246 12.2188ZM3.85723 9.15312L10.2328 2.7793L11.5213 4.06777L5.1457 10.4416L3.58301 10.7176L3.85723 9.15312ZM13.6113 13.6953H0.673828C0.362695 13.6953 0.111328 13.9467 0.111328 14.2578V14.8906C0.111328 14.968 0.174609 15.0312 0.251953 15.0312H14.0332C14.1105 15.0312 14.1738 14.968 14.1738 14.8906V14.2578C14.1738 13.9467 13.9225 13.6953 13.6113 13.6953Z"
        fill="#40A9FF"
      />
    </svg>
  )
}
export function TrashIcon({ className }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24">
      <g data-name="01 align center">
        <path d="M22 4h-5V2a2 2 0 00-2-2H9a2 2 0 00-2 2v2H2v2h2v15a3 3 0 003 3h10a3 3 0 003-3V6h2zM9 2h6v2H9zm9 19a1 1 0 01-1 1H7a1 1 0 01-1-1V6h12z"></path>
        <path d="M9 10H11V18H9z"></path>
        <path d="M13 10H15V18H13z"></path>
      </g>
    </svg>
  )
}

export function SettingIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      x="0"
      y="0"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M34.283 384c17.646 30.626 56.779 41.148 87.405 23.502l.062-.036 9.493-5.483A191.51 191.51 0 00192 437.055V448c0 35.346 28.654 64 64 64s64-28.654 64-64v-10.944a191.494 191.494 0 0060.757-35.115l9.536 5.504c30.633 17.673 69.794 7.167 87.467-23.467 17.673-30.633 7.167-69.794-23.467-87.467l-9.472-5.461a194.15 194.15 0 000-70.187l9.472-5.461c30.633-17.673 41.14-56.833 23.467-87.467-17.673-30.633-56.833-41.14-87.467-23.467l-9.493 5.483A191.518 191.518 0 00320 74.944V64c0-35.346-28.654-64-64-64s-64 28.654-64 64v10.944a191.494 191.494 0 00-60.757 35.115l-9.536-5.525C91.073 86.86 51.913 97.367 34.24 128s-7.167 69.794 23.467 87.467l9.472 5.461a194.15 194.15 0 000 70.187l-9.472 5.461C27.158 314.296 16.686 353.38 34.283 384zM256 170.667c47.128 0 85.333 38.205 85.333 85.333S303.128 341.333 256 341.333 170.667 303.128 170.667 256s38.205-85.333 85.333-85.333z"></path>
    </svg>
  )
}
export function HomeIcon({ className }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24">
      <path
        d="M13.338.833a2 2 0 00-2.676 0L0 10.429v10.4a3.2 3.2 0 003.2 3.2h17.6a3.2 3.2 0 003.2-3.2v-10.4zM15 22.026H9V17a3 3 0 016 0zm7-1.2a1.2 1.2 0 01-1.2 1.2H17V17a5 5 0 00-10 0v5.026H3.2a1.2 1.2 0 01-1.2-1.2v-9.507l10-9 10 9z"
        data-name="01 align center"
      ></path>
    </svg>
  )
}

export function PlusSmallIcon({ className }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24">
      <path
        d="M13 11L13 6 11 6 11 11 6 11 6 13 11 13 11 18 13 18 13 13 18 13 18 11 13 11z"
        data-name="01 align center"
      ></path>
    </svg>
  )
}

export function UserAddIcon({ className }: IconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24">
      <g data-name="01 align center">
        <path d="M9 12a6 6 0 10-6-6 6.006 6.006 0 006 6zM9 2a4 4 0 11-4 4 4 4 0 014-4z"></path>
        <path d="M21 10L21 7 19 7 19 10 16 10 16 12 19 12 19 15 21 15 21 12 24 12 24 10 21 10z"></path>
        <path d="M13.043 14H4.957A4.963 4.963 0 000 18.957V24h2v-5.043A2.96 2.96 0 014.957 16h8.086A2.96 2.96 0 0116 18.957V24h2v-5.043A4.963 4.963 0 0013.043 14z"></path>
      </g>
    </svg>
  )
}

export function TagIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
      viewBox="0 0 24 24"
    >
      <path d="M7.707 9.256a.999.999 0 11-1.414 1.414.999.999 0 111.414-1.414zm13.852 6.085l-.565.565a4.977 4.977 0 01-1.435 3.399l-3.167 3.208A4.965 4.965 0 0112.849 24h-.017c-1.335 0-2.59-.52-3.534-1.464l-7.416-7.353a2.987 2.987 0 01-.864-2.453l.765-6.916a1 1 0 01.858-.881l6.889-.942a3.018 3.018 0 012.528.851l7.475 7.412c.387.387.697.823.931 1.288a3.01 3.01 0 00-.342-3.835l-7.591-7.405a1.009 1.009 0 00-.851-.292l-6.889.942a1.001 1.001 0 01-1.127-.855A1.001 1.001 0 014.519.971l6.89-.943a3 3 0 012.528.852l7.589 7.405c1.946 1.945 1.957 5.107.032 7.057zm-3.438-1.67l-7.475-7.412a1.016 1.016 0 00-.847-.287l-6.115.837-.679 6.14a.994.994 0 00.287.816l7.416 7.353c.569.57 1.322.881 2.123.881h.01a2.972 2.972 0 002.126-.893l3.167-3.208a3.006 3.006 0 00-.014-4.229z"></path>
    </svg>
  )
}
export function MoreIcon({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.6875 2.25C9.6875 1.33594 8.91406 0.5625 8 0.5625C7.05078 0.5625 6.3125 1.33594 6.3125 2.25C6.3125 3.19922 7.05078 3.9375 8 3.9375C8.91406 3.9375 9.6875 3.19922 9.6875 2.25ZM13.9062 0.5625C12.957 0.5625 12.2188 1.33594 12.2188 2.25C12.2188 3.19922 12.957 3.9375 13.9062 3.9375C14.8203 3.9375 15.5938 3.19922 15.5938 2.25C15.5938 1.33594 14.8203 0.5625 13.9062 0.5625ZM2.09375 0.5625C1.14453 0.5625 0.40625 1.33594 0.40625 2.25C0.40625 3.19922 1.14453 3.9375 2.09375 3.9375C3.00781 3.9375 3.78125 3.19922 3.78125 2.25C3.78125 1.33594 3.00781 0.5625 2.09375 0.5625Z"
        fill="#8C8C8C"
      />
    </svg>
  )
}