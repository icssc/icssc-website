import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar variant="light" fixed="top" expand="lg" style={{ backgroundColor: "white", boxShadow:"0px .5px 10px"}}>
            <Navbar.Brand href="/index">
                <svg height="50" viewBox="0 0 469 117" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V116H116V0H0ZM96.7759 53.7631C96.6744 54.143 87.1769 71.5778 86.9362 71.9954C86.7477 72.3231 85.898 73.66 85.6718 73.8369C85.4369 74.0109 84.7003 74.4053 84.3204 74.4372C83.9405 74.4604 72.9756 74.3502 72.9756 74.3502C72.9756 74.3502 72.5667 75.1013 72.6189 75.1767C72.6711 75.2492 72.7929 75.3826 72.7929 75.3826C72.7929 75.3826 82.215 75.4058 82.6471 75.5073C83.0792 75.6088 83.8448 75.5595 84.2769 76.1714C84.709 76.7775 84.912 76.6238 85.0889 78.1057C85.2716 79.5818 85.2252 81.1507 85.1411 82.1222C85.0454 83.2213 84.8221 83.9927 84.6307 84.535C84.2392 85.6399 83.694 86.4519 83.0589 86.9043C82.4151 87.3654 79.924 88.0295 78.8075 88.3282C77.6823 88.6356 74.8838 89.3519 72.4884 89.3519C70.093 89.3519 68.8808 89.2504 66.8421 89.0445C64.8034 88.8386 63.771 88.7748 62.9706 88.5341C62.1006 88.2702 60.5433 87.8352 59.6965 88.0411C58.8555 88.247 58.493 88.5341 57.5708 88.7893C56.6573 89.0445 54.8738 89.1228 54.056 89.0967C53.4789 89.0764 51.4286 89.1199 49.6857 88.6994C48.053 88.3021 46.7161 87.4379 46.4203 87.2639C45.1994 86.5476 44.3236 85.8748 43.3318 84.9352C42.7315 84.3668 42.5952 84.4016 42.1051 83.9637C41.9224 83.7955 41.644 84.6278 41.0466 85.4833C40.31 86.5418 39.5705 87.0899 38.9789 87.5713C37.5318 88.7545 35.8005 89.3258 34.5738 89.3548C33.3529 89.378 31.4766 89.1199 30.4616 88.6327C29.6583 88.2528 27.8748 86.9014 26.9845 86.0546C25.6186 84.7612 23.3334 81.8119 22.7621 80.765C20.8858 77.2821 19.8331 74.791 19.5779 73.0597C18.8268 68.0862 18.9863 65.3979 19.2125 63.2345C19.5199 60.2823 20.6944 56.5355 21.17 55.1928C21.8138 53.3948 23.3682 51.1473 23.8061 50.4223C24.244 49.6915 24.9284 48.8099 25.2155 48.4039C25.3605 48.2009 26.1551 47.3222 26.4161 47.0177C26.5002 46.9191 26.9091 46.487 26.9091 46.487C26.9091 46.487 27.6718 45.7591 27.7472 45.6895C27.9531 45.5039 28.5389 44.9993 28.8608 44.8108C29.7453 44.2917 30.2035 44.8833 30.2847 45.1617C30.3282 45.3444 30.3949 45.4546 30.3137 46.0665C30.1977 46.951 30.1165 47.2874 30.0788 47.8123C30.0672 47.995 30.0237 48.3401 30.0121 48.6214C30.0005 48.9027 30.0121 49.9786 30.0179 50.1758C30.0295 50.46 30.1165 51.2807 30.1542 51.5707C30.1919 51.8607 30.2644 52.4987 30.3253 52.8438C30.392 53.2324 30.4819 53.8646 30.5312 54.0995C30.5573 54.2271 30.6965 54.8825 30.7139 54.9521C30.7545 55.1087 30.8299 55.3494 30.9952 55.854C31.0561 56.0396 31.1808 56.3731 31.2504 56.5123C31.3867 56.7994 31.6912 57.3649 31.7869 57.3649C31.9435 57.3649 32.0682 56.6167 32.103 56.318C32.1175 56.1962 32.1262 56.0338 32.103 55.8308C32.0508 55.3726 31.9406 55.1754 31.8826 54.8825C31.8449 54.694 31.7492 54.5113 31.7434 54.1923C31.7395 54.0183 31.7753 53.882 31.8507 53.7834C31.9232 53.6877 32.2016 53.7022 32.3089 53.7486C32.451 53.8095 32.5554 53.8269 32.8193 54.0183C34.191 55.0101 34.5477 55.6626 34.5477 55.6626C35.235 56.6457 35.6642 57.3968 36.1398 58.5481C36.308 58.9541 36.6821 59.9401 37.2273 61.915C37.2447 61.9788 37.5434 63.1649 37.6826 63.6869C37.7406 63.9073 37.8827 64.8643 37.9117 65.047C37.9407 65.2297 38.0074 65.8532 38.0248 65.9547C38.0625 66.2041 38.2597 68.1674 38.2597 68.1674C38.2597 68.1674 39.4197 60.4389 40.7943 56.2397C42.1689 52.0405 46.0607 44.9413 46.5943 43.7929C47.1337 42.6474 48.952 39.7184 49.6103 38.6686C50.5354 37.1925 51.7128 35.6149 52.3218 34.481C53.2092 32.8251 53.7022 32.567 53.7747 31.5752C53.8559 30.5892 54.0009 28.9826 54.462 28.3678C54.9231 27.7617 55.7409 26.9961 56.6428 26.796C57.4461 26.6162 58.377 26.564 59.1977 26.9439C60.0184 27.3238 60.2649 27.6167 60.6187 28.0546C60.9725 28.4925 61.0305 29.0319 61.4394 29.4408C61.8483 29.8497 63.887 30.6617 65.3109 31.3258L66.7348 31.9841C66.7348 31.9841 69.3709 33.176 70.2583 33.8488C71.3371 34.6695 73.1467 36.3138 74.1124 37.3288C75.0839 38.3438 77.9317 41.6005 79.0511 44.1003C80.1763 46.5914 80.4576 47.0554 80.9361 48.6794C81.5567 50.7848 81.7278 51.8781 81.4465 52.9076C81.4407 52.9337 81.4291 52.9743 81.4117 53.0265C81.3334 53.2904 81.0115 54.288 80.0313 54.868C79.8689 54.9637 79.4919 55.1812 78.9612 55.2334C78.619 55.2653 78.3638 55.216 78.0854 55.1609C77.3604 55.0159 76.8326 54.7491 76.6847 54.636C76.154 54.2387 75.6349 53.6906 75.3101 53.4383C75.2086 53.3861 73.5266 52.2174 72.79 51.9129C72.0534 51.6084 71.0355 50.9936 70.2699 50.7674C69.5101 50.5412 68.3124 50.0511 67.9847 50.0511C67.657 50.0511 67.0132 49.7524 66.4593 49.7727C65.8967 49.8017 65.5168 49.8249 65.2616 50.2048C65.0064 50.5905 64.7512 50.7384 64.873 51.301C65.0035 51.8636 65.0789 52.6756 65.4124 53.4412C65.9112 54.578 66.1113 55.1667 66.4999 55.8598C67.7498 58.087 68.4139 58.3422 69.6696 60.3374C70.9601 62.3877 71.5691 64.2031 71.8968 65.2007C72.1694 66.033 72.5754 67.2365 72.6856 68.5618C72.7668 69.5246 72.8161 70.1394 72.8161 70.1394C72.8161 70.1394 72.6856 70.2641 72.9901 70.4178L73.2975 70.5715L77.8563 71.1341L82.9255 71.4908L83.4156 71.2269L93.4583 52.9308C93.4583 52.9308 93.4815 52.8293 93.6642 52.8061C93.8382 52.7771 93.7164 52.7771 93.8382 52.7771C93.96 52.7771 96.7672 52.8293 96.9209 52.9598C97.0746 53.0845 96.8687 53.3919 96.7672 53.7718L96.7759 53.7631Z" fill="#FE87B3"/>
                    <path d="M137.372 46.36C136.764 46.36 136.316 46.232 136.028 45.976C135.772 45.688 135.644 45.24 135.644 44.632V38.92C135.644 38.312 135.772 37.88 136.028 37.624C136.316 37.336 136.764 37.192 137.372 37.192H142.124V21.064H137.372C136.764 21.064 136.316 20.936 136.028 20.68C135.772 20.392 135.644 19.944 135.644 19.336V13.528C135.644 12.92 135.772 12.488 136.028 12.232C136.316 11.944 136.764 11.8 137.372 11.8H157.82C158.428 11.8 158.86 11.944 159.116 12.232C159.404 12.488 159.548 12.92 159.548 13.528V19.336C159.548 19.944 159.404 20.392 159.116 20.68C158.86 20.936 158.428 21.064 157.82 21.064H153.164V37.192H157.82C158.428 37.192 158.86 37.336 159.116 37.624C159.404 37.88 159.548 38.312 159.548 38.92V44.632C159.548 45.24 159.404 45.688 159.116 45.976C158.86 46.232 158.428 46.36 157.82 46.36H137.372ZM188.467 46.36H176.755C172.755 46.36 169.779 45.56 167.827 43.96C165.907 42.36 164.947 39.896 164.947 36.568V21.64C164.947 18.312 165.907 15.848 167.827 14.248C169.779 12.616 172.755 11.8 176.755 11.8H188.467C189.075 11.8 189.507 11.944 189.763 12.232C190.051 12.488 190.195 12.92 190.195 13.528V19.336C190.195 19.944 190.051 20.392 189.763 20.68C189.507 20.936 189.075 21.064 188.467 21.064H178.819C177.827 21.064 177.091 21.272 176.611 21.688C176.131 22.072 175.891 22.664 175.891 23.464V34.888C175.891 35.688 176.131 36.28 176.611 36.664C177.091 37.016 177.827 37.192 178.819 37.192H188.467C189.075 37.192 189.507 37.336 189.763 37.624C190.051 37.88 190.195 38.312 190.195 38.92V44.632C190.195 45.24 190.051 45.688 189.763 45.976C189.507 46.232 189.075 46.36 188.467 46.36ZM211.647 46.36H196.479C195.871 46.36 195.423 46.232 195.135 45.976C194.879 45.688 194.751 45.24 194.751 44.632V39.016C194.751 38.408 194.879 37.976 195.135 37.72C195.423 37.432 195.871 37.288 196.479 37.288H209.391C209.807 37.288 210.111 37.16 210.303 36.904C210.527 36.616 210.639 36.28 210.639 35.896C210.639 35.352 210.527 34.952 210.303 34.696C210.111 34.44 209.807 34.296 209.391 34.264L202.191 33.256C199.951 32.936 198.143 32.2 196.767 31.048C195.423 29.896 194.751 27.976 194.751 25.288V20.248C194.751 17.528 195.631 15.448 197.391 14.008C199.151 12.536 201.583 11.8 204.687 11.8H218.127C218.735 11.8 219.167 11.944 219.423 12.232C219.711 12.488 219.855 12.92 219.855 13.528V19.24C219.855 19.848 219.711 20.296 219.423 20.584C219.167 20.84 218.735 20.968 218.127 20.968H206.943C206.527 20.968 206.207 21.112 205.983 21.4C205.759 21.656 205.647 21.992 205.647 22.408C205.647 22.824 205.759 23.176 205.983 23.464C206.207 23.752 206.527 23.912 206.943 23.944L214.095 24.904C216.335 25.224 218.143 25.96 219.519 27.112C220.895 28.264 221.583 30.184 221.583 32.872V37.912C221.583 40.632 220.687 42.728 218.895 44.2C217.135 45.64 214.719 46.36 211.647 46.36ZM253.647 46.36H238.479C237.871 46.36 237.423 46.232 237.135 45.976C236.879 45.688 236.751 45.24 236.751 44.632V39.016C236.751 38.408 236.879 37.976 237.135 37.72C237.423 37.432 237.871 37.288 238.479 37.288H251.391C251.807 37.288 252.111 37.16 252.303 36.904C252.527 36.616 252.639 36.28 252.639 35.896C252.639 35.352 252.527 34.952 252.303 34.696C252.111 34.44 251.807 34.296 251.391 34.264L244.191 33.256C241.951 32.936 240.143 32.2 238.767 31.048C237.423 29.896 236.751 27.976 236.751 25.288V20.248C236.751 17.528 237.631 15.448 239.391 14.008C241.151 12.536 243.583 11.8 246.687 11.8H260.127C260.735 11.8 261.167 11.944 261.423 12.232C261.711 12.488 261.855 12.92 261.855 13.528V19.24C261.855 19.848 261.711 20.296 261.423 20.584C261.167 20.84 260.735 20.968 260.127 20.968H248.943C248.527 20.968 248.207 21.112 247.983 21.4C247.759 21.656 247.647 21.992 247.647 22.408C247.647 22.824 247.759 23.176 247.983 23.464C248.207 23.752 248.527 23.912 248.943 23.944L256.095 24.904C258.335 25.224 260.143 25.96 261.519 27.112C262.895 28.264 263.583 30.184 263.583 32.872V37.912C263.583 40.632 262.687 42.728 260.895 44.2C259.135 45.64 256.719 46.36 253.647 46.36ZM284.685 46.36H276.909C276.301 46.36 275.853 46.232 275.565 45.976C275.309 45.688 275.181 45.24 275.181 44.632V21.064H268.125C267.517 21.064 267.069 20.936 266.781 20.68C266.525 20.392 266.397 19.944 266.397 19.336V13.528C266.397 12.92 266.525 12.488 266.781 12.232C267.069 11.944 267.517 11.8 268.125 11.8H293.469C294.077 11.8 294.509 11.944 294.765 12.232C295.053 12.488 295.197 12.92 295.197 13.528V19.336C295.197 19.944 295.053 20.392 294.765 20.68C294.509 20.936 294.077 21.064 293.469 21.064H286.413V44.632C286.413 45.24 286.269 45.688 285.981 45.976C285.725 46.232 285.293 46.36 284.685 46.36ZM329.289 37.288C329.289 38.76 329.065 40.104 328.617 41.32C328.201 42.504 327.433 43.528 326.313 44.392C325.225 45.224 323.721 45.88 321.801 46.36C319.881 46.84 317.433 47.08 314.457 47.08C311.481 47.08 309.033 46.84 307.113 46.36C305.193 45.88 303.673 45.224 302.553 44.392C301.465 43.528 300.697 42.504 300.249 41.32C299.833 40.104 299.625 38.76 299.625 37.288V13.528C299.625 12.92 299.753 12.488 300.009 12.232C300.297 11.944 300.745 11.8 301.353 11.8H308.889C309.497 11.8 309.929 11.944 310.185 12.232C310.473 12.488 310.617 12.92 310.617 13.528V35.416C310.617 36.056 310.857 36.6 311.337 37.048C311.817 37.464 312.889 37.672 314.553 37.672C316.249 37.672 317.337 37.464 317.817 37.048C318.297 36.6 318.537 36.056 318.537 35.416V13.528C318.537 12.92 318.665 12.488 318.921 12.232C319.209 11.944 319.657 11.8 320.265 11.8H327.561C328.169 11.8 328.601 11.944 328.857 12.232C329.145 12.488 329.289 12.92 329.289 13.528V37.288ZM353.582 46.36H337.406C336.798 46.36 336.35 46.232 336.062 45.976C335.806 45.688 335.678 45.24 335.678 44.632V13.528C335.678 12.92 335.806 12.488 336.062 12.232C336.35 11.944 336.798 11.8 337.406 11.8H353.582C357.582 11.8 360.542 12.6 362.462 14.2C364.414 15.8 365.39 18.264 365.39 21.592V36.568C365.39 39.896 364.414 42.36 362.462 43.96C360.542 45.56 357.582 46.36 353.582 46.36ZM346.574 20.968V37.288H352.286C353.054 37.288 353.614 37.096 353.966 36.712C354.35 36.328 354.542 35.736 354.542 34.936V23.272C354.542 22.472 354.35 21.896 353.966 21.544C353.614 21.16 353.054 20.968 352.286 20.968H346.574ZM395.49 46.36H373.218C372.61 46.36 372.162 46.232 371.874 45.976C371.618 45.688 371.49 45.24 371.49 44.632V13.528C371.49 12.92 371.618 12.488 371.874 12.232C372.162 11.944 372.61 11.8 373.218 11.8H395.49C396.098 11.8 396.53 11.944 396.786 12.232C397.074 12.488 397.218 12.92 397.218 13.528V19.144C397.218 19.752 397.074 20.2 396.786 20.488C396.53 20.744 396.098 20.872 395.49 20.872H382.242V24.568H391.602C392.21 24.568 392.642 24.712 392.898 25C393.186 25.256 393.33 25.688 393.33 26.296V31.432C393.33 32.04 393.186 32.488 392.898 32.776C392.642 33.032 392.21 33.16 391.602 33.16H382.242V37.288H395.49C396.098 37.288 396.53 37.432 396.786 37.72C397.074 37.976 397.218 38.408 397.218 39.016V44.632C397.218 45.24 397.074 45.688 396.786 45.976C396.53 46.232 396.098 46.36 395.49 46.36ZM411.824 46.36H404.624C404.016 46.36 403.568 46.232 403.28 45.976C403.024 45.688 402.896 45.24 402.896 44.632V13.528C402.896 12.92 403.024 12.488 403.28 12.232C403.568 11.944 404.016 11.8 404.624 11.8H409.616C410.224 11.8 410.736 11.896 411.152 12.088C411.6 12.28 412.032 12.616 412.448 13.096L421.76 23.752V13.528C421.76 12.92 421.888 12.488 422.144 12.232C422.432 11.944 422.88 11.8 423.488 11.8H430.688C431.296 11.8 431.728 11.944 431.984 12.232C432.272 12.488 432.416 12.92 432.416 13.528V44.632C432.416 45.24 432.272 45.688 431.984 45.976C431.728 46.232 431.296 46.36 430.688 46.36H423.488C422.88 46.36 422.432 46.232 422.144 45.976C421.888 45.688 421.76 45.24 421.76 44.632V38.728L413.552 28.792V44.632C413.552 45.24 413.408 45.688 413.12 45.976C412.864 46.232 412.432 46.36 411.824 46.36ZM455.357 46.36H447.581C446.973 46.36 446.525 46.232 446.237 45.976C445.981 45.688 445.853 45.24 445.853 44.632V21.064H438.797C438.189 21.064 437.741 20.936 437.453 20.68C437.197 20.392 437.069 19.944 437.069 19.336V13.528C437.069 12.92 437.197 12.488 437.453 12.232C437.741 11.944 438.189 11.8 438.797 11.8H464.141C464.749 11.8 465.181 11.944 465.437 12.232C465.725 12.488 465.869 12.92 465.869 13.528V19.336C465.869 19.944 465.725 20.392 465.437 20.68C465.181 20.936 464.749 21.064 464.141 21.064H457.085V44.632C457.085 45.24 456.941 45.688 456.653 45.976C456.397 46.232 455.965 46.36 455.357 46.36ZM159.404 104.36H147.692C143.692 104.36 140.716 103.56 138.764 101.96C136.844 100.36 135.884 97.896 135.884 94.568V79.64C135.884 76.312 136.844 73.848 138.764 72.248C140.716 70.616 143.692 69.8 147.692 69.8H159.404C160.012 69.8 160.444 69.944 160.7 70.232C160.988 70.488 161.132 70.92 161.132 71.528V77.336C161.132 77.944 160.988 78.392 160.7 78.68C160.444 78.936 160.012 79.064 159.404 79.064H149.756C148.764 79.064 148.028 79.272 147.548 79.688C147.068 80.072 146.828 80.664 146.828 81.464V92.888C146.828 93.688 147.068 94.28 147.548 94.664C148.028 95.016 148.764 95.192 149.756 95.192H159.404C160.012 95.192 160.444 95.336 160.7 95.624C160.988 95.88 161.132 96.312 161.132 96.92V102.632C161.132 103.24 160.988 103.688 160.7 103.976C160.444 104.232 160.012 104.36 159.404 104.36ZM195.598 95.288C195.598 96.76 195.374 98.104 194.926 99.32C194.51 100.504 193.742 101.528 192.622 102.392C191.534 103.224 190.014 103.88 188.062 104.36C186.142 104.84 183.694 105.08 180.718 105.08C177.742 105.08 175.278 104.84 173.326 104.36C171.374 103.88 169.838 103.224 168.718 102.392C167.63 101.528 166.862 100.504 166.414 99.32C165.998 98.104 165.79 96.76 165.79 95.288V78.92C165.79 77.448 165.998 76.12 166.414 74.936C166.862 73.72 167.63 72.68 168.718 71.816C169.838 70.952 171.374 70.28 173.326 69.8C175.278 69.32 177.742 69.08 180.718 69.08C183.694 69.08 186.142 69.32 188.062 69.8C190.014 70.28 191.534 70.952 192.622 71.816C193.742 72.68 194.51 73.72 194.926 74.936C195.374 76.12 195.598 77.448 195.598 78.92V95.288ZM176.686 93.56C176.686 94.2 176.926 94.744 177.406 95.192C177.886 95.608 178.99 95.816 180.718 95.816C182.446 95.816 183.55 95.608 184.03 95.192C184.51 94.744 184.75 94.2 184.75 93.56V80.648C184.75 80.04 184.51 79.528 184.03 79.112C183.55 78.664 182.446 78.44 180.718 78.44C178.99 78.44 177.886 78.664 177.406 79.112C176.926 79.528 176.686 80.04 176.686 80.648V93.56ZM231.133 95.288C231.133 96.76 230.909 98.104 230.461 99.32C230.045 100.504 229.277 101.528 228.157 102.392C227.069 103.224 225.565 103.88 223.645 104.36C221.725 104.84 219.277 105.08 216.301 105.08C213.325 105.08 210.877 104.84 208.957 104.36C207.037 103.88 205.517 103.224 204.397 102.392C203.309 101.528 202.541 100.504 202.093 99.32C201.677 98.104 201.469 96.76 201.469 95.288V71.528C201.469 70.92 201.597 70.488 201.853 70.232C202.141 69.944 202.589 69.8 203.197 69.8H210.733C211.341 69.8 211.773 69.944 212.029 70.232C212.317 70.488 212.461 70.92 212.461 71.528V93.416C212.461 94.056 212.701 94.6 213.181 95.048C213.661 95.464 214.733 95.672 216.397 95.672C218.093 95.672 219.181 95.464 219.661 95.048C220.141 94.6 220.381 94.056 220.381 93.416V71.528C220.381 70.92 220.509 70.488 220.765 70.232C221.053 69.944 221.501 69.8 222.109 69.8H229.405C230.013 69.8 230.445 69.944 230.701 70.232C230.989 70.488 231.133 70.92 231.133 71.528V95.288ZM246.449 104.36H239.249C238.641 104.36 238.193 104.232 237.905 103.976C237.649 103.688 237.521 103.24 237.521 102.632V71.528C237.521 70.92 237.649 70.488 237.905 70.232C238.193 69.944 238.641 69.8 239.249 69.8H244.241C244.849 69.8 245.361 69.896 245.777 70.088C246.225 70.28 246.657 70.616 247.073 71.096L256.385 81.752V71.528C256.385 70.92 256.513 70.488 256.769 70.232C257.057 69.944 257.505 69.8 258.113 69.8H265.313C265.921 69.8 266.353 69.944 266.609 70.232C266.897 70.488 267.041 70.92 267.041 71.528V102.632C267.041 103.24 266.897 103.688 266.609 103.976C266.353 104.232 265.921 104.36 265.313 104.36H258.113C257.505 104.36 257.057 104.232 256.769 103.976C256.513 103.688 256.385 103.24 256.385 102.632V96.728L248.177 86.792V102.632C248.177 103.24 248.033 103.688 247.745 103.976C247.489 104.232 247.057 104.36 246.449 104.36ZM296.654 104.36H284.942C280.942 104.36 277.966 103.56 276.014 101.96C274.094 100.36 273.134 97.896 273.134 94.568V79.64C273.134 76.312 274.094 73.848 276.014 72.248C277.966 70.616 280.942 69.8 284.942 69.8H296.654C297.262 69.8 297.694 69.944 297.95 70.232C298.238 70.488 298.382 70.92 298.382 71.528V77.336C298.382 77.944 298.238 78.392 297.95 78.68C297.694 78.936 297.262 79.064 296.654 79.064H287.006C286.014 79.064 285.278 79.272 284.798 79.688C284.318 80.072 284.078 80.664 284.078 81.464V92.888C284.078 93.688 284.318 94.28 284.798 94.664C285.278 95.016 286.014 95.192 287.006 95.192H296.654C297.262 95.192 297.694 95.336 297.95 95.624C298.238 95.88 298.382 96.312 298.382 96.92V102.632C298.382 103.24 298.238 103.688 297.95 103.976C297.694 104.232 297.262 104.36 296.654 104.36ZM304.763 104.36C304.155 104.36 303.707 104.232 303.419 103.976C303.163 103.688 303.035 103.24 303.035 102.632V96.92C303.035 96.312 303.163 95.88 303.419 95.624C303.707 95.336 304.155 95.192 304.763 95.192H309.515V79.064H304.763C304.155 79.064 303.707 78.936 303.419 78.68C303.163 78.392 303.035 77.944 303.035 77.336V71.528C303.035 70.92 303.163 70.488 303.419 70.232C303.707 69.944 304.155 69.8 304.763 69.8H325.211C325.819 69.8 326.251 69.944 326.507 70.232C326.795 70.488 326.939 70.92 326.939 71.528V77.336C326.939 77.944 326.795 78.392 326.507 78.68C326.251 78.936 325.819 79.064 325.211 79.064H320.555V95.192H325.211C325.819 95.192 326.251 95.336 326.507 95.624C326.795 95.88 326.939 96.312 326.939 96.92V102.632C326.939 103.24 326.795 103.688 326.507 103.976C326.251 104.232 325.819 104.36 325.211 104.36H304.763ZM359.025 104.36H334.593C333.985 104.36 333.537 104.232 333.249 103.976C332.993 103.688 332.865 103.24 332.865 102.632V71.528C332.865 70.92 332.993 70.488 333.249 70.232C333.537 69.944 333.985 69.8 334.593 69.8H342.033C342.641 69.8 343.073 69.944 343.329 70.232C343.617 70.488 343.761 70.92 343.761 71.528V95.288H350.337V87.512C350.337 86.904 350.465 86.472 350.721 86.216C351.009 85.928 351.457 85.784 352.065 85.784H359.025C359.633 85.784 360.065 85.928 360.321 86.216C360.609 86.472 360.753 86.904 360.753 87.512V102.632C360.753 103.24 360.609 103.688 360.321 103.976C360.065 104.232 359.633 104.36 359.025 104.36Z"/>
                
                </svg>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="collapsable-navbar" />
            <Navbar.Collapse id="collapsable-navbar">
                <Nav className="ml-auto mt2 mt-lg-0">
                    <NavDropdown title='About Us' id='about-us-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/mission">Our Mission</NavDropdown.Item>
                        <NavDropdown.Item href="/awards">Awards and Recognitions</NavDropdown.Item>
                        <NavDropdown.Item href="/committees">Committees</NavDropdown.Item>
                        <NavDropdown.Item href="/board">Board Members</NavDropdown.Item>
                        <NavDropdown.Item href="/past-board">Past Board Members</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Get Involved' id='get-involved-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                        <NavDropdown.Item href="/humans-of-ics/home">Humans of ICS</NavDropdown.Item>
                        <NavDropdown.Item href="/ics-podcast">ICS Podcast</NavDropdown.Item>
                        <NavDropdown.Item href="/discord">Join Our Discord</NavDropdown.Item>
                        <NavDropdown.Item href="/get-involved">Join Our Committees</NavDropdown.Item>
                        <NavDropdown.Item href="/newsletter">Join Our Newsletter</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Election' id='election-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/candidates">Candidates</NavDropdown.Item>
                        {/* <NavDropdown.Item href="">Vote!</NavDropdown.Item> */}
                    </NavDropdown>
                    <NavDropdown title='Our Partners' id='partners-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/affiliates">Affiliates</NavDropdown.Item>
                        <NavDropdown.Item href="/sponsors">Sponsors</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item title="Contact Us" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/contacts">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}