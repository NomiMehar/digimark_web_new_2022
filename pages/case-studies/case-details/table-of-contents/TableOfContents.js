// components/case-details/table-of-contents/TableOfContents.js
import React from 'react';
import style from './tableOfContents.module.scss';

export default function TableOfContents({ contents }) {
    return (
        <div className={style.case_table_contents}>
            <div className="container items-center flex flex-wrap">
                <section>
                    <h2>Table of Contents</h2>
                    <ul className="list-none">
                        {contents.map((item, index) => (
                            <li key={index}><span>{item}</span></li>
                        ))}
                    </ul>
                </section>
                <svg xmlns="http://www.w3.org/2000/svg" width="183" height="183" viewBox="0 0 183 183" fill="none">
                    <path d="M166.124 165.536C165.799 168.077 164.977 170.529 163.705 172.752C162.432 174.976 160.734 176.926 158.708 178.493C156.681 180.06 154.366 181.212 151.894 181.884C149.422 182.556 146.842 182.734 144.301 182.408L17.0365 166.117C14.4948 165.793 12.0419 164.972 9.81792 163.699C7.59396 162.427 5.64251 160.728 4.07509 158.701C2.50766 156.675 1.35498 154.359 0.6829 151.886C0.0108203 149.414 -0.167484 146.833 0.158175 144.291L16.4487 17.027C16.7736 14.4863 17.5959 12.0345 18.8685 9.81168C20.1412 7.58882 21.8393 5.63846 23.8658 4.07199C25.8923 2.50552 28.2076 1.35362 30.6794 0.682104C33.1512 0.0105855 35.7311 -0.167402 38.2717 0.158307L165.536 16.4489C168.077 16.7738 170.529 17.596 172.752 18.8686C174.975 20.1412 176.925 21.8393 178.492 23.8657C180.059 25.8922 181.211 28.2075 181.883 30.6793C182.555 33.1511 182.733 35.731 182.408 38.2718L166.124 165.536Z" fill="#6BB64A" fill-opacity="0.38"/>
                    <path d="M147.089 9.92969H35.4892C21.3763 9.92969 9.93542 21.3705 9.93542 35.4835V147.08C9.93542 161.193 21.3763 172.634 35.4892 172.634H147.089C161.202 172.634 172.643 161.193 172.643 147.08V35.4835C172.643 21.3705 161.202 9.92969 147.089 9.92969Z" fill="#6BB64A"/>
                    <path d="M81.681 107.261C76.9216 111.217 70.8836 113.303 64.6973 113.129H37.9712V59.6764H64.7004C70.913 59.5741 76.9515 61.7307 81.6937 65.7454V98.5885V49.9532C76.3701 47.4926 70.5649 46.2497 64.7004 46.3149H24.6033V126.506H64.6973C69.704 126.528 74.6705 125.611 79.3396 123.804C79.8158 123.646 80.2801 123.455 80.7291 123.232L80.793 123.203L81.336 122.855L81.6969 122.615L81.681 107.261Z" fill="white"/>
                    <path d="M81.6647 50.0234V65.8093L81.6935 65.8285V98.6811L95.0581 91.0149V73.2359L108.107 80.8381L121.791 73.3668L81.6935 50.049L81.6647 50.0234Z" fill="white"/>
                    <path d="M81.6804 107.335C81.6804 107.335 81.6804 107.335 81.6804 107.351V122.703L148.523 79.226V136.236H161.887V56.0391L81.6804 107.335Z" fill="white"/>
                </svg>
            </div>
        </div>
    );
}
