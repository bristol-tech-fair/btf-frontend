import React from 'react';
import { SVG } from './Robot.styles';

const StandingRobot = () => {
  return (
    <SVG>
      <title id="robotTitle">Image of the Robot</title>
      <desc id="robotDesc">
        Blue and pink color robot with a love sign on his chest hold his arms
        wide open.
      </desc>
      <g clipPath="url(#clip0)">
        <path
          d="M254.5 144.235C254.5 144.235 263.167 139.881 267.724 139.693C272.281 139.506 288.541 139.41 288.599 140.836C288.657 142.262 285.155 147.259 283.73 147.317C282.306 147.375 268.266 145.954 268.065 147.96C267.863 149.967 293.842 150.327 294.173 151.455C294.504 152.584 291.774 159.617 290.777 160.471C289.621 161.432 268.535 159.367 268.295 160.519C268.055 161.672 294.494 163.155 294.835 164.84C295.175 166.525 295.065 173.112 293.957 174.015C292.849 174.917 271.49 169.267 271.312 171.389C271.135 173.511 289.506 176.765 289.836 177.894C290.167 179.022 289.894 186.175 288.767 186.506C287.64 186.838 269.245 183.597 264.899 182.061C260.553 180.525 253.478 174.86 253.387 172.128C253.296 169.396 254.5 144.235 254.5 144.235Z"
          fill="var(--lightblue)"
        />
        <path
          d="M189.899 115.771C189.899 115.771 219.912 129.813 230.412 134.374C237.127 137.288 259.671 144.595 259.671 144.595C259.671 144.595 259.488 154.029 258.937 161.475C258.554 166.223 257.794 170.933 256.663 175.56C256.663 175.56 241.233 173.366 228.215 170.736C212.971 167.649 200.02 158.757 200.02 158.757L189.899 115.771Z"
          fill="var(--lightpink)"
        />
        <path
          d="M194.562 117.619C197.353 120.581 200.884 123.831 202.044 127.864C202.692 130.111 202.452 132.723 202.591 135.065C202.778 138.138 203.013 141.21 203.167 144.288C203.277 146.544 203.272 148.796 203.325 151.052C203.383 153.4 203.862 155.493 204.284 157.773C204.764 160.5 204.894 165.325 209.009 164.24C212.136 163.419 213.604 159.737 214.712 157.039C216.597 152.435 216.597 147.351 216.756 142.454C216.781 139.763 217.007 137.079 217.432 134.422C217.739 132.751 218.698 127.158 221.394 127.768C225.111 128.608 220.885 141.038 220.3 143.313C219.024 148.292 217.691 153.318 217.475 158.484C217.346 161.561 217.043 168.849 220.909 170.006C224.775 171.163 227.145 167.346 228.215 164.398C230.009 159.511 230.79 154.341 231.874 149.271C232.402 146.668 233.098 144.103 233.956 141.59C234.307 140.527 234.729 139.49 235.218 138.484C236.086 136.784 236.657 136.194 238.096 137.821C239.99 139.938 239.055 143.006 238.355 145.421C237.549 148.148 236.815 150.889 236.225 153.673C235.669 156.317 235.222 158.982 234.887 161.667C234.628 163.765 234.278 165.988 234.752 168.071C235.544 171.571 238.705 172.627 241.823 171.129C246.48 168.892 245.66 162.243 246.581 157.951C247.227 154.902 248.116 151.91 249.238 149.002C250.159 146.626 251.2 143.284 253.008 141.422C255.171 139.199 255.886 142.295 255.656 143.923C255.422 145.397 255.043 146.844 254.524 148.244C253.565 151.052 252.394 153.765 251.608 156.631C249.983 162.619 249.495 168.859 250.169 175.028C250.26 175.901 253.584 175.224 253.474 174.144C252.933 169.152 253.165 164.106 254.159 159.185C255.095 154.682 257.037 150.582 258.318 146.194C259.071 143.596 260.064 139.732 256.467 139.031C253.651 138.484 250.898 140.029 249.372 142.334C247.104 145.771 245.626 149.982 244.461 153.904C243.209 158.119 242.916 162.363 242.091 166.645C241.923 167.509 241.612 169.305 240.753 169.775C239.597 170.414 238.758 169.118 238.393 168.263C237.678 166.607 237.808 164.691 237.976 162.949C238.457 158.18 239.317 153.457 240.547 148.825C241.415 145.464 243.808 140.783 241.803 137.451C240.336 135.013 237.367 134.504 234.906 135.675C231.716 137.192 230.661 141.83 229.788 144.902C228.598 149.093 227.922 153.409 226.977 157.658C226.507 159.851 225.918 162.016 225.212 164.144C224.732 165.541 223.399 170.097 221.974 166.967C220.185 163.04 220.574 157.817 221.183 153.688C221.845 149.165 223.101 144.763 224.224 140.337C224.704 138.392 225.183 136.438 225.533 134.46C225.86 132.674 226.493 130.437 226.037 128.613C225.26 125.435 221.14 125.684 218.809 126.822C215.134 128.608 214.295 133.313 213.844 136.966C213.244 141.854 213.604 146.818 212.914 151.7C212.618 153.959 212.006 156.165 211.096 158.253C210.745 159.022 210.386 159.794 209.988 160.539C209.746 161.012 209.477 161.47 209.182 161.912C208.913 162.291 207.82 162.944 208.659 162.833L209.94 162.997C208.237 161.792 207.978 160.39 207.762 158.455C207.546 156.52 206.932 154.614 206.759 152.651C206.347 148.052 206.496 143.38 206.198 138.767C206.026 136.155 205.839 133.543 205.719 130.927C205.627 128.906 205.58 127.13 204.668 125.286C203.004 121.892 200.217 119.122 197.651 116.404C196.97 115.68 193.852 116.885 194.562 117.619Z"
          fill="var(--lightblue)"
        />
        <path
          d="M89.219 116.38C89.219 116.38 72.7044 121.479 59.1972 130.783C49.5464 137.442 37.4878 144.638 36.0776 150.658C35.291 154.019 35.6987 158.758 38.5143 163.141C41.3299 167.524 45.5029 173.525 47.0426 173.222C48.5823 172.92 77.6497 141.815 80.1391 137.759C82.6285 133.702 89.219 116.38 89.219 116.38Z"
          fill="var(--lightblue)"
        />
        <path
          d="M46.7308 139.367C46.7308 139.367 44.5484 145.387 46.5629 154.278C48.8845 164.495 52.7985 167.846 52.7985 167.846L57.9932 162.473C57.9932 162.473 54.4437 159.19 52.41 149.636C51.206 143.942 53.1966 134.902 53.1966 134.902L46.7308 139.367Z"
          fill="--lightgrey"
        />
        <path
          d="M59.2163 130.802C57.0132 135.309 56.4093 140.433 57.5039 145.33C59.4897 153.971 63.3174 156.852 63.3174 156.852L70.8241 148.69C70.8241 148.69 65.8452 147.884 64.1664 139.972C62.6123 132.651 66.4592 126.318 66.4592 126.318L59.2163 130.802Z"
          fill="--lightgrey"
        />
        <path
          d="M71.2798 123.764C69.0134 127.301 68.0248 131.508 68.4786 135.685C69.1549 141.762 74.0282 145.123 74.0282 145.123L78.3451 140.116C78.3451 140.116 75.2945 136.045 75.2609 129.501C75.3114 126.554 75.9814 123.65 77.2275 120.98L71.2798 123.764Z"
          fill="--lightgrey"
        />
        <path
          d="M25.5683 154.077C25.6114 154.202 13.1595 159.761 9.4565 161.47C5.75353 163.179 -0.136682 166.487 0.00241964 167.447C0.141521 168.407 -0.328545 173.717 1.36945 173.995C3.06744 174.274 16.071 165.911 16.071 165.911C16.071 165.911 0.582807 178.143 0.904179 179.305C1.22555 180.467 4.06993 187.855 5.01966 187.903C5.96938 187.951 19.0641 170.515 19.7596 171.806C20.4551 173.098 8.50678 190.371 8.50678 190.371C8.50678 190.371 14.4977 195.83 15.27 195.681C16.0422 195.532 25.7361 177.567 26.8346 178.398C27.933 179.228 19.6684 194.913 20.9252 196.742C23.05 199.766 26.0287 201.01 28.7628 199.622C29.7221 199.142 38.097 183.299 38.097 183.299C38.097 183.299 37.1376 173.515 33.9719 165.57C30.8061 157.625 25.5683 154.077 25.5683 154.077Z"
          fill="var(--lightblue)"
        />
        <path
          d="M36.0968 150.678C36.0968 150.678 27.367 142.996 24.4363 144.35C21.5055 145.704 27.0168 156.871 27.4341 159.746C27.8514 162.622 29.2616 175.464 34.3316 180.304C39.4016 185.143 46.3231 187.793 47.6949 187.102C49.0668 186.41 47.0618 173.227 47.0618 173.227C47.0618 173.227 39.157 166.175 36.9362 159.977C34.4036 153.025 36.0968 150.678 36.0968 150.678Z"
          fill="var(--logopink)"
        />
        <path
          d="M85.6456 209.651V243.512H125.193C125.193 243.512 126.714 230.194 126.714 226.584C126.714 222.974 127.17 213.045 127.17 213.045L85.6456 209.651Z"
          fill="var(--lightblue)"
        />
        <path
          d="M85.6456 221.797C85.6456 221.797 91.1569 225.35 106.17 226.79C120.047 228.12 126.7 226.79 126.7 226.79L126.153 234.659C126.153 234.659 115.778 235.139 105.527 234.659C92.9844 234.083 85.6648 230.818 85.6648 230.818L85.6456 221.797Z"
          fill="--lightgrey"
        />
        <path
          d="M80.1055 240.689C77.2276 245.192 79.3429 260.852 81.6261 261.995C83.9092 263.137 132.95 263.517 133.324 261.995C133.698 260.473 136.681 239.104 133.324 238.029C130.887 237.247 81.8515 237.933 80.1055 240.689Z"
          fill="var(--logopink)"
        />
        <path
          d="M122.579 244.472H90.4422C87.2633 244.472 84.6863 247.051 84.6863 250.233C84.6863 253.415 87.2633 255.994 90.4422 255.994H122.579C125.758 255.994 128.335 253.415 128.335 250.233C128.335 247.051 125.758 244.472 122.579 244.472Z"
          fill="--lightgrey"
        />
        <path
          d="M156.923 210.852C156.923 210.852 156.544 223.026 156.923 229.095C157.302 235.163 156.923 243.934 156.923 243.934L193.415 241.27C193.415 241.27 186.959 226.43 185.055 219.584C183.888 215.402 182.362 211.328 180.493 207.409L156.923 210.852Z"
          fill="var(--lightblue)"
        />
        <path
          d="M156.664 219.363C156.664 219.363 162.108 221.505 172.229 221.221C180.23 220.996 184.379 217.928 184.379 217.928L188.096 228.567C188.096 228.567 184.772 231.778 173.653 232.407C163.125 233.022 156.837 229.099 156.837 229.099L156.664 219.363Z"
          fill="--lightgrey"
        />
        <path
          d="M198.356 254.794C196.97 256.772 151.982 261.452 150.654 259.739C149.325 258.025 148.562 241.495 150.654 238.816C151.863 237.275 197.804 235.048 199.704 237.251C201.666 239.527 200.5 251.75 198.356 254.794Z"
          fill="var(--logopink)"
        />
        <path
          d="M191.808 240.988L159.774 243.241C156.579 243.466 154.171 246.239 154.396 249.436C154.62 252.632 157.392 255.041 160.587 254.816L192.621 252.563C195.816 252.338 198.224 249.565 197.999 246.369C197.775 243.172 195.003 240.763 191.808 240.988Z"
          fill="--lightgrey"
        />
        <path
          d="M183.614 114.26H89.7922C80.4674 114.26 72.9082 121.826 72.9082 131.159V207.781C72.9082 217.114 80.4674 224.68 89.7922 224.68H183.614C192.938 224.68 200.498 217.114 200.498 207.781V131.159C200.498 121.826 192.938 114.26 183.614 114.26Z"
          fill="var(--logopink)"
        />
        <path
          d="M176.344 131.402H97.45C92.8777 131.402 89.1711 135.112 89.1711 139.689V168.724C89.1711 173.3 92.8777 177.01 97.45 177.01H176.344C180.917 177.01 184.623 173.3 184.623 168.724V139.689C184.623 135.112 180.917 131.402 176.344 131.402Z"
          fill="--lightgrey"
        />
        <path
          d="M176.34 131.402H97.4548C95.2581 131.409 93.1533 132.285 91.6009 133.841C90.0485 135.397 89.1749 137.504 89.1711 139.703V168.729C89.1787 170.925 90.0539 173.03 91.6057 174.583C93.1576 176.136 95.2602 177.012 97.4548 177.02H176.34C178.534 177.012 180.637 176.136 182.189 174.583C183.741 173.03 184.616 170.925 184.623 168.729V139.703C184.619 137.504 183.746 135.397 182.193 133.841C180.641 132.285 178.536 131.409 176.34 131.402ZM172.589 173.17H100.731C98.8128 173.165 96.9747 172.4 95.6184 171.042C94.2621 169.685 93.4979 167.845 93.4928 165.925V142.007C93.4979 140.088 94.2621 138.248 95.6184 136.89C96.9747 135.533 98.8128 134.768 100.731 134.763H172.589C174.507 134.768 176.345 135.533 177.701 136.89C179.057 138.248 179.822 140.088 179.827 142.007V165.925C179.822 167.845 179.057 169.685 177.701 171.042C176.345 172.4 174.507 173.165 172.589 173.17Z"
          fill="#36A9E1"
        />
        <path
          d="M99.1336 143.222H108.631L107.672 142.886V159.689C107.672 160.039 108.458 160.025 108.631 160.025H119.663L118.704 159.689V165.58L121.044 164.355L101.633 164.931L102.592 165.267L101.474 141.998C101.441 141.225 98.1167 141.815 98.1743 142.886L99.2919 166.151C99.2919 166.501 100.069 166.492 100.251 166.487L119.663 165.911C120.301 165.911 121.999 165.575 121.999 164.691V158.801C121.999 158.45 121.212 158.469 121.04 158.469H110.007L110.967 158.801V141.998C110.967 141.647 110.18 141.666 110.007 141.666H100.51C99.4645 141.666 96.9319 143.222 99.1336 143.222Z"
          fill="var(--logopink)"
        />
        <path
          d="M141.233 155.368C141.128 159.847 138.283 167.798 132.384 165.93C127.659 164.451 125.371 159.06 125.361 154.461C125.361 150.058 128.239 142.31 133.938 143.808C138.912 145.118 141.133 150.682 141.233 155.33C141.233 155.863 144.591 155.363 144.548 154.442C144.428 149.42 141.9 143.88 136.662 142.516C132.441 141.407 127.549 143.323 124.887 146.698C118.517 154.806 123.769 170.222 135.439 167.121C141.276 165.565 144.413 160.284 144.553 154.442C144.562 153.995 141.257 154.418 141.233 155.368Z"
          fill="var(--logopink)"
        />
        <path
          d="M142.773 144.806L150.299 164.667C150.778 165.93 153.177 165.724 153.541 164.456L159.575 144.59C159.892 143.558 159.038 143.068 158.112 143.068H144.552C142.605 143.068 142.063 145.651 144.298 145.651H157.858L156.395 144.125L150.361 163.995L153.604 163.784L146.078 143.918C145.478 142.339 142.188 143.256 142.773 144.806Z"
          fill="var(--logopink)"
        />
        <path
          d="M174.239 146.424H163.206L164.166 146.813V142.492L161.907 143.745H172.939L171.979 143.356V147.677C171.979 148.503 175.198 147.951 175.198 146.813V142.492C175.198 142.132 174.445 142.103 174.239 142.103H163.206C162.521 142.103 160.947 142.444 160.947 143.356V147.677C160.947 148.037 161.705 148.066 161.907 148.066H172.939C174.028 148.066 176.392 146.424 174.239 146.424Z"
          fill="var(--logopink)"
        />
        <path
          d="M174.239 153.597H163.206L164.166 154.009V149.209L161.892 150.495H172.924L171.965 150.078V154.878C171.965 155.752 175.208 155.186 175.208 154.009V149.209C175.208 148.839 174.45 148.796 174.248 148.796H163.216C162.501 148.796 160.947 149.141 160.947 150.078V154.878C160.947 155.253 161.705 155.296 161.907 155.296H172.939C174.066 155.296 176.412 153.597 174.239 153.597Z"
          fill="var(--logopink)"
        />
        <path
          d="M173.725 162.843H162.693L164.195 163.928V158.167L162.42 159.487H173.452L171.955 158.426V164.187C171.955 165.896 175.227 165.435 175.227 163.952V158.191C175.227 157.351 174.445 157.106 173.725 157.106H162.693C162.055 157.106 160.923 157.663 160.923 158.426V164.187C160.923 165.027 161.7 165.272 162.42 165.272H173.452C175.308 165.248 175.913 162.843 173.725 162.843Z"
          fill="var(--logopink)"
        />
        <path
          d="M98.1935 201.528C98.1023 205.369 96.3899 211.034 91.6029 210.741C87.1469 210.467 83.7941 206.262 83.8037 201.946C83.8037 197.438 87.3627 193.304 92.073 193.818C96.318 194.298 98.1023 197.88 98.1982 201.787C98.227 202.944 101.556 202.268 101.503 200.899C101.359 194.946 97.0902 191.298 91.1808 191.778C85.5305 192.258 80.4605 196.684 80.47 202.58C80.4796 208.475 85.6408 212.964 91.4255 212.772C97.7186 212.565 101.369 207.049 101.498 201.163C101.541 199.714 98.2174 200.328 98.1935 201.528Z"
          fill="#36A9E1"
        />
        <path
          d="M135.017 204.572C134.859 209.493 130.949 214.294 125.64 212.954C121.495 211.908 118.622 207.918 118.632 203.693C118.632 198.969 122.517 194.241 127.534 195.225C132.024 196.099 134.873 200.15 135.017 204.572C135.017 205.321 138.331 204.754 138.298 203.693C138.087 197.256 132.465 192.944 126.225 193.612C120.507 194.217 115.327 198.513 115.351 204.572C115.375 211.024 121.303 215.311 127.424 214.654C133.285 214.03 138.101 209.752 138.298 203.689C138.317 203.007 135.05 203.487 135.017 204.572Z"
          fill="#36A9E1"
        />
        <path
          d="M166.65 204.034C166.497 208.696 163.144 213.031 158.151 212.781C153.522 212.546 149.853 208.341 149.834 203.78C149.814 199.219 153.191 195.052 157.882 195.038C162.794 195.038 166.516 199.296 166.65 204.034C166.703 205.748 170.008 205.234 169.979 203.78C169.953 202.285 169.632 200.811 169.035 199.44C168.438 198.07 167.576 196.832 166.499 195.796C165.422 194.76 164.152 193.947 162.76 193.405C161.369 192.862 159.884 192.599 158.391 192.632C152.203 192.723 146.519 197.654 146.505 204.034C146.49 210.415 151.853 215.278 158.093 215.187C164.41 215.091 169.773 210.16 169.979 203.78C170.032 202.066 166.698 202.551 166.65 204.034Z"
          fill="#36A9E1"
        />
        <path
          d="M193.051 205.297C192.893 210.218 188.998 214.99 183.697 213.938C179.294 213.055 176.172 208.85 176.196 204.428C176.22 199.627 180.148 194.917 185.228 195.743C189.909 196.507 192.902 200.755 193.051 205.311C193.08 206.195 196.375 205.59 196.341 204.428C196.13 197.961 190.533 193.453 184.211 193.996C178.263 194.505 172.867 199.041 172.905 205.311C172.948 211.783 178.819 216.276 185.036 215.744C191.147 215.215 196.135 210.698 196.341 204.428C196.365 203.583 193.089 204.111 193.051 205.297Z"
          fill="#36A9E1"
        />
        <path
          d="M122.565 204.294C123.831 204.351 125.126 205.383 126.297 205.868C127.555 206.384 128.861 206.775 130.196 207.035C130.607 207.136 131.036 207.132 131.444 207.023C131.853 206.914 132.227 206.703 132.532 206.411C132.969 205.902 132.926 205.153 132.153 204.994C130.571 204.699 129.033 204.201 127.577 203.511C126.311 202.896 125.217 202.186 123.774 202.119C123.059 202.09 121.927 202.344 121.606 203.079C121.284 203.813 121.874 204.255 122.565 204.289V204.294Z"
          fill="#36A9E1"
        />
        <path
          d="M156.712 199.435C156.645 202.796 156.485 206.156 156.232 209.517C156.127 210.957 159.46 210.381 159.551 209.152C159.791 205.798 159.951 202.437 160.031 199.07C160.06 197.587 156.736 198.216 156.712 199.435Z"
          fill="#36A9E1"
        />
        <path
          d="M189.626 201.984L179.395 204.423C177.356 204.903 177.913 206.948 179.942 206.464L190.173 204.034C192.211 203.554 191.655 201.509 189.626 201.994V201.984Z"
          fill="#36A9E1"
        />
        <path
          d="M91.248 198.11L86.3986 204.994C85.1275 206.804 88.1638 207.116 89.1854 206.051L89.3006 205.926C89.4174 205.798 89.5003 205.643 89.5416 205.475C89.5829 205.307 89.5812 205.131 89.5368 204.964C89.4924 204.796 89.4066 204.643 89.2874 204.517C89.1681 204.392 89.0193 204.298 88.8545 204.246C88.4468 204.109 88.0082 204.096 87.593 204.207C87.1778 204.318 86.8042 204.548 86.5185 204.87L86.3986 204.994L89.1854 206.051L94.0156 199.166C95.2339 197.433 92.1449 196.809 91.2288 198.11H91.248Z"
          fill="#36A9E1"
        />
        <path
          d="M148.793 124.537C171.816 121.244 187.098 108.214 185.899 97.7579C185.52 94.431 173.639 109.506 147.359 113.601C114.559 118.694 107.336 109.141 104.424 113.702C104.424 113.687 102.832 131.105 148.793 124.537Z"
          fill="var(--lightblue)"
        />
        <path
          d="M172.435 111.676L122.584 121.796C118.135 122.686 113.515 121.777 109.733 119.268C105.951 116.759 103.315 112.854 102.4 108.406L93.795 65.9331C92.9059 61.4799 93.8139 56.8556 96.3205 53.0703C98.8271 49.285 102.729 46.6465 107.173 45.7312L157.024 35.611C161.473 34.7225 166.092 35.6318 169.874 38.1404C173.656 40.649 176.292 44.5532 177.208 49.0005L185.813 91.4736C186.702 95.9268 185.794 100.551 183.287 104.336C180.781 108.122 176.879 110.76 172.435 111.676Z"
          fill="var(--lightpink)"
        />
        <path
          d="M172.2 110.715L124.076 120.5C118.229 121.69 112.406 120.528 108.175 115.996C105.081 112.684 104.199 108.713 103.345 104.474L97.3732 74.9395C96.7497 71.8718 96.0877 68.8088 95.5074 65.7315C94.1787 58.7223 97.1814 51.2281 103.743 47.9684C106.276 46.7009 109.283 46.3361 112.041 45.7792L125.438 43.0571L154.261 37.2097C158.127 36.4223 161.753 35.9134 165.61 37.4593C171.222 39.7061 174.57 44.627 175.754 50.4216C177.611 59.4904 179.429 68.564 181.266 77.6376L183.755 89.923C184.714 94.7238 184.738 99.3758 182.081 103.735C180.992 105.508 179.555 107.04 177.856 108.24C176.158 109.44 174.234 110.282 172.2 110.715C170.166 111.172 170.694 113.087 172.713 112.636C180.441 110.907 186.796 104.676 187.727 96.6394C188.139 93.0531 187.185 89.5437 186.48 86.0775L180.086 54.5215C179.433 51.2858 179.016 47.7523 177.62 44.7374C174.263 37.5361 166.406 33.417 158.587 34.3628C155.988 34.6796 153.393 35.3565 150.836 35.875L135.588 38.9668C126.306 40.8535 117.015 42.7114 107.739 44.6222C102.261 45.7504 97.4068 48.6741 94.4473 53.5277C91.6893 58.0405 91.4782 62.9854 92.4951 68.0167L98.6539 98.4013C99.3398 101.795 100.002 105.194 100.716 108.579C101.463 112.21 103.294 115.529 105.968 118.095C108.641 120.661 112.03 122.354 115.687 122.948C119.524 123.587 123.179 122.708 126.911 121.949L141.3 119.026L170.761 113.029L172.68 112.636C174.742 112.223 174.195 110.303 172.2 110.715Z"
          fill="var(--lightblue)"
        />
        <path
          d="M98.3038 51.6266C98.3038 51.6266 96.4619 42.6202 95.5409 38.5347C94.9601 36.0033 94.0994 33.5445 92.9747 31.2038C92.9747 31.2038 93.0515 28.1265 93.6606 27.656C94.2698 27.1855 95.0229 25.63 96.4858 29.2499C97.9488 32.8697 98.7594 34.478 100.668 39.3028C101.729 41.9865 103.916 47.7859 103.916 47.7859C103.916 47.7859 102.712 50.4936 101.191 51.2377C100.298 51.6829 99.2828 51.8197 98.3038 51.6266Z"
          fill="var(--logopink)"
        />
        <path
          d="M99.4981 22.1638C99.5748 24.6549 98.6835 27.0788 97.0118 28.9259C95.34 30.773 93.0179 31.8994 90.5335 32.0685C88.0492 32.2376 85.5961 31.4361 83.6899 29.8326C81.7836 28.229 80.5728 25.9482 80.3118 23.4696C79.9472 18.1599 83.1897 15.1354 88.5091 14.7753C93.8286 14.4152 99.1384 16.8541 99.4981 22.1638Z"
          fill="var(--lightpink)"
        />
        <path
          d="M150.28 38.7411C150.28 38.7411 151.906 36.9168 153.604 28.1793C154.52 23.4552 154.832 17.387 156.851 17.6798C158.87 17.9727 161.614 20.4979 160.209 26.8878C159.187 31.4823 157.551 38.2226 157.551 38.2226C156.59 39.0827 155.357 39.5757 154.069 39.6149C151.148 39.8453 150.28 38.7411 150.28 38.7411Z"
          fill="var(--logopink)"
        />
        <path
          d="M169.193 10.8818C169.297 12.4114 169.099 13.9465 168.611 15.3996C168.122 16.8526 167.352 18.195 166.345 19.3502C165.338 20.5053 164.113 21.4506 162.741 22.1318C161.369 22.8131 159.876 23.2172 158.348 23.3208C151.92 23.7577 144.658 17.4158 144.222 10.9826C143.785 4.5495 150.342 0.478378 156.765 0.0270983C158.293 -0.0773147 159.827 0.120662 161.278 0.609718C162.73 1.09877 164.071 1.86933 165.226 2.87735C166.38 3.88537 167.324 5.11112 168.005 6.48455C168.685 7.85798 169.089 9.35219 169.193 10.8818Z"
          fill="var(--lightpink)"
        />
        <path
          d="M94.7351 70.5707C94.7351 70.5707 89.3437 73.4753 86.0197 74.9875C82.6957 76.4998 75.9469 77.4696 75.9469 77.4696C74.0983 74.929 71.3952 73.1422 68.335 72.438C65.2747 71.7338 62.0633 72.1596 59.2919 73.6371C56.5204 75.1145 54.3753 77.5441 53.2514 80.4787C52.1276 83.4134 52.1005 86.6556 53.1753 89.6086C54.2501 92.5616 56.3543 95.0267 59.1008 96.5502C61.8472 98.0738 65.0511 98.5532 68.1226 97.9002C71.1942 97.2472 73.9267 95.5058 75.8174 92.9965C77.708 90.4872 78.6295 87.3789 78.4123 84.2435C80.8356 84.1386 83.2372 83.7388 85.564 83.0529C88.7777 81.9727 96.5962 79.7164 96.5962 79.7164L94.7351 70.5707Z"
          fill="var(--lightpink)"
        />
        <path
          d="M69.9319 84.5364C70.7617 88.0554 69.2412 89.2988 66.3921 89.4957C63.5429 89.6925 61.087 87.7434 60.9096 85.1749C60.7321 82.6065 61.1782 79.5771 64.0273 79.3851C66.8765 79.1931 69.342 82.0015 69.9319 84.5364Z"
          fill="var(--logopink)"
        />
        <path
          d="M215.561 39.9701C212.069 40.2112 208.79 41.7422 206.362 44.2659C203.933 46.7897 202.528 50.1264 202.419 53.6285C202.419 53.6285 194.327 55.4049 190.254 56.1634C181.04 57.8821 179.112 58.3814 179.112 58.3814L180.551 65.5058C180.551 65.5058 189.185 63.7247 193.929 62.3997C197.123 61.4703 200.243 60.3021 203.263 58.9047C204.308 61.7827 206.259 64.2429 208.822 65.9141C211.386 67.5854 214.423 68.3773 217.475 68.1703C225.25 67.6422 228.311 60.1385 227.783 52.3563C227.255 44.5742 223.337 39.442 215.561 39.9701Z"
          fill="var(--lightpink)"
        />
        <path
          d="M214.664 58.559C217.843 58.559 220.42 55.9797 220.42 52.798C220.42 49.6163 217.843 47.037 214.664 47.037C211.485 47.037 208.908 49.6163 208.908 52.798C208.908 55.9797 211.485 58.559 214.664 58.559Z"
          fill="var(--logopink)"
        />
        <path
          d="M133.607 75.0163C133.866 78.8291 132.601 82.5887 130.09 85.4679C127.579 88.3472 124.029 90.1103 120.219 90.3694C116.41 90.6285 112.654 89.3624 109.777 86.8496C106.9 84.3368 105.139 80.7831 104.88 76.9703C104.338 69.0345 109.437 63.8304 117.351 63.2879C125.265 62.7454 133.065 67.0805 133.607 75.0163Z"
          fill="var(--lightblue)"
        />
        <path
          d="M173.159 68.5352C173.697 76.4758 169.72 81.6031 161.787 82.1456C153.853 82.6881 146.96 78.4009 146.438 70.4651C145.915 62.5293 149.009 57.3492 156.937 56.8067C164.866 56.2642 172.632 60.5946 173.159 68.5352Z"
          fill="var(--logopink)"
        />
        <path
          d="M123.274 71.0474L114.353 71.6545C113.381 71.7207 112.646 72.5636 112.712 73.537L113.156 80.0703C113.222 81.0438 114.064 81.7793 115.037 81.7131L123.957 81.106C124.93 81.0398 125.664 80.197 125.598 79.2235L125.154 72.6902C125.088 71.7167 124.246 70.9813 123.274 71.0474Z"
          fill="var(--logopink)"
        />
        <path
          d="M163.372 66.87L154.452 67.4771C153.479 67.5433 152.744 68.3861 152.81 69.3596L153.254 75.8929C153.32 76.8663 154.162 77.6018 155.135 77.5356L164.055 76.9286C165.028 76.8624 165.763 76.0195 165.696 75.0461L165.253 68.5128C165.186 67.5393 164.344 66.8038 163.372 66.87Z"
          fill="var(--lightblue)"
        />
        <path
          d="M152.261 103.73L130.076 106.769C127.942 107.062 123.543 99.9039 123.543 99.9039C123.251 97.7675 128.383 99.1598 130.518 98.8669L150.515 96.0344C152.649 95.7416 156.131 93.9941 156.424 96.1305C156.424 96.1305 154.395 103.442 152.261 103.73Z"
          fill="--lightgrey"
          stroke="var(--logopink)"
          strokeWidth="2.38"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="295" height="263" fill="white" />
        </clipPath>
      </defs>
    </SVG>
  );
};

export default StandingRobot;
