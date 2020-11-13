import React, {useEffect, useRef} from "react";
export default () => {
    const ref = useRef();

    useEffect(()=>{

        ref.current.addEventListener("keyup", function(e) {
            if (e.keyCode === 8) {
                this.style.height = "inherit";
                this.style.height = `${this.scrollHeight}px`;
            } else {
                this.style.height = `${this.scrollHeight}px`;
            }
        });
        ref.current.addEventListener(
            "paste",
            function(e) {
                e.preventDefault();
                console.log(
                    "paste",
                    e.clipboardData.items,
                    e.clipboardData.types,
                    e.clipboardData.getData("text/html"),
                    e.clipboardData.getData("text/plain"),
                    e.clipboardData.getData("text/Files")
                );
            },
            false
        );
    },[])

    return <>
        <div style={{margin: '35px 0px 10px 0'}}>
        <textarea
            // @ts-ignore
            ref={ref}
            className={'textarea'}
            style={{
            outline: 'none',
            padding: '15px',
            borderRadius: '20px',margin: '0px 20px',width: '600px'}}/>
        <div className={'tools'}>{
            [{
                title: '图片',
                icon: imgICon
            },{
                title: '视频',
                icon: videoIcon
            },{
                title: '投票',
                icon: voteIcon
            },{
                title: '表情',
                icon: faceIcon
            }].map((v)=>(<span title={v.title}>
                {
                    v.icon
                }
            </span>))}
        <button>唧唧</button>
        </div>
    </div>
        <style jsx>{`
        .tools{
            padding: 0px 36px;
            margin-top: 10px;
            >span {
                margin: 0px 5px;
                cursor: pointer;
            }
            >button{
                float:right;
                width: 80px;
                height:40px;
                border-radius: 10px;
                margin: 0 0px 0 0;
                outline: none;
                border: 0px;
                background-color: #43e413;
                color: white;
                font-weight: 500;
                font-size:20px;
                
            }
        }
        .textarea {
            overflow: hidden;
            box-sizing: border-box;
            transition: all 0.2s linear;
            resize : none;
            color:#333033ed;
            font-weight:400;
            font-size:16px;
        }
        `}</style>
    </>
}

const imgICon = <svg t="1605245442108" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="8850" width="40" height="40">
    <path
        d="M878.592 55.296 128 55.296c-47.104 0-84.992 37.888-84.992 84.992l0 750.592c0 47.104 37.888 84.992 84.992 84.992l750.592 0c47.104 0 84.992-38.912 84.992-84.992L963.584 136.192C960.512 89.088 925.696 55.296 878.592 55.296zM921.6 887.808c0 21.504-17.408 43.008-43.008 43.008L128 930.816c-21.504 0-43.008-17.408-43.008-43.008L84.992 136.192c0-21.504 17.408-43.008 43.008-43.008l750.592 0c21.504 0 43.008 17.408 43.008 43.008L921.6 887.808zM273.408 388.096c55.296 0 102.4-47.104 102.4-102.4s-47.104-102.4-102.4-102.4c-55.296-4.096-102.4 43.008-102.4 98.304C171.008 340.992 217.088 388.096 273.408 388.096zM273.408 222.208c33.792 0 63.488 29.696 63.488 64.512s-29.696 64.512-63.488 64.512c-33.792-4.096-59.392-33.792-59.392-68.608S238.592 222.208 273.408 222.208zM836.608 815.104 836.608 815.104c0-4.096-4.096-4.096-4.096-8.192L648.192 541.696l0 0c-4.096-8.192-8.192-13.312-21.504-13.312-4.096 0-13.312 4.096-13.312 4.096l-84.992 84.992L421.888 456.704c-4.096-8.192-8.192-13.312-17.408-13.312s-13.312 4.096-17.408 8.192l0 0-212.992 358.4 0 0c-4.096 4.096-4.096 8.192-4.096 13.312 0 12.288 8.192 21.504 21.504 21.504l622.592 0c13.312 0 21.504-8.192 21.504-21.504C836.608 823.296 836.608 819.2 836.608 815.104L836.608 815.104zM226.304 801.792l175.104-294.912 102.4 157.696c0 4.096 4.096 4.096 4.096 8.192l0 0c4.096 4.096 8.192 4.096 13.312 4.096s13.312-4.096 13.312-4.096l84.992-84.992L768 805.888 226.304 805.888 226.304 801.792z"
        p-id="8851" fill="#1afa29"></path>
</svg>
const videoIcon = <svg t="1605245205499" className="icon" viewBox="0 0 1056 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="6182" width="40" height="40">
    <path
        d="M880.226263 1015.065859H176.019394C78.855758 1014.949495 0.116364 936.210101 0 839.046465V185.134545C0.064646 87.945051 78.829899 9.166869 176.019394 9.050505H880.226263c97.176566 0.116364 175.91596 78.855758 176.019394 176.019394v653.89899c-0.064646 97.202424-78.81697 175.980606-176.019394 176.09697zM176.019394 59.358384c-69.404444 0.116364-125.633939 56.371717-125.711515 125.776161v653.89899c0.077576 69.391515 56.32 125.608081 125.711515 125.646869H880.226263c69.378586-0.077576 125.595152-56.268283 125.711515-125.646869V185.134545c-0.116364-69.378586-56.332929-125.595152-125.711515-125.711515H176.019394v-0.064646z m0 0"
        fill="#1afa29" p-id="6183"></path>
    <path
        d="M1005.937778 310.846061h-100.615758c-8.985859 0-17.286465-4.796768-21.785858-12.580202a25.112566 25.112566 0 0 1 0-25.147475c4.486465-7.783434 12.8-12.580202 21.785858-12.580202h100.615758c8.985859 0 17.299394 4.796768 21.785858 12.580202a25.112566 25.112566 0 0 1 0 25.147475c-4.486465 7.783434-12.8 12.580202-21.785858 12.580202z m0 301.795555h-100.615758c-9.283232 0.478384-18.075152-4.20202-22.85899-12.166464a25.160404 25.160404 0 0 1 22.85899-38.076768h100.615758c13.89899 0 25.225051 11.248485 25.22505 25.160404a25.225051 25.225051 0 0 1-7.408485 17.764848 25.116444 25.116444 0 0 1-17.816565 7.31798z m0-150.85899h-100.615758c-9.283232 0.478384-18.075152-4.20202-22.85899-12.166464a25.160404 25.160404 0 0 1 0-25.897374c4.783838-7.977374 13.575758-12.657778 22.85899-12.166465h100.615758c13.89899 0 25.225051 11.248485 25.22505 25.082829 0 6.684444-2.663434 13.097374-7.395555 17.816565a25.213414 25.213414 0 0 1-17.829495 7.330909z m0 301.795556h-100.615758c-13.911919 0-25.186263-11.274343-25.186262-25.186263s11.274343-25.186263 25.186262-25.186262h100.615758a25.18497 25.18497 0 1 1 0 50.372525z m-592.006465-25.160404c-34.624646 0-61.827879-30.913939-61.827879-70.503435v-311.725252c0-39.524848 26.88-70.438788 61.297778-70.438788 11.326061 0 22.703838 3.503838 33.09899 10.201212l238.506667 155.966061c19.393939 12.515556 30.978586 34.624646 30.978586 59.177373 0 25.354343-12.050101 48.265051-32.297374 61.362425L447.301818 728.229495a62.267475 62.267475 0 0 1-33.370505 10.188283z m-0.530101-402.411313c-5.223434 0-11.054545 8.274747-11.054545 20.130909V667.79798c0 12.114747 5.960404 20.260202 11.52 20.260202 2.094545-0.142222 4.111515-0.853333 5.831111-2.055758L656.08404 530.230303a23.027071 23.027071 0 0 0 9.541819-19.264646c0-7.343838-2.973737-13.705051-8.080808-17.01495L419.038384 338.049293a10.982141 10.982141 0 0 0-5.637172-2.042828z m0 0"
        fill="#1afa29" p-id="6184"></path>
</svg>

const voteIcon = <svg t="1605245245051" className="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="6942" width="40" height="40">
    <path
        d="M46.545455 895.069091v-93.090909h930.90909v93.090909z m743.936-156.672v-563.2h93.090909v563.2z m-216.715637 0V264.564364h93.090909v473.832727z m-433.431273 0V353.885091h93.09091v384.512z m216.762182 0V93.137455h93.090909v645.259636z"
        p-id="6943" fill="#1afa29"></path>
</svg>

const faceIcon = <svg t="1605245306981" className="icon" viewBox="0 0 1024 1024" version="1.1"
                      xmlns="http://www.w3.org/2000/svg" p-id="7809" width="40" height="40">
    <path
        d="M510.4 1007.5c-265.1 0-480.8-215.8-480.8-481.1S245.3 45.2 510.4 45.2 991.1 261 991.1 526.3 775.5 1007.5 510.4 1007.5zM510.4 93.3c-238.6 0-432.7 194.3-432.7 433.1s194.1 433.1 432.7 433.1 432.7-194.3 432.7-433.1S749 93.3 510.4 93.3z"
        p-id="7810" fill="#1afa29"></path>
    <path
        d="M659.9 534.2c-49.3 0-89.4-40.1-89.4-89.4s40.1-89.4 89.4-89.4 89.4 40.1 89.4 89.4S709.2 534.2 659.9 534.2zM659.9 403.5c-22.8 0-41.3 18.5-41.3 41.3s18.5 41.3 41.3 41.3 41.3-18.5 41.3-41.3S682.6 403.5 659.9 403.5z"
        p-id="7811" fill="#1afa29"></path>
    <path d="M318.6 550.2 293.2 509.4 385.8 451.8 291.1 378.1 320.6 340.1 469.8 456.1Z" p-id="7812"
          fill="#1afa29"></path>
    <path
        d="M514.1 800c-1 0-1.9 0-2.9 0C375.6 798.1 280 669.1 276 663.6l38.8-28.4c0.8 1.2 85.8 115.3 197.3 116.6 0.7 0 1.3 0 2 0 65.6 0 129.2-39.4 189.1-117.1l38.1 29.3C671.8 754.3 595.4 800 514.1 800z"
        p-id="7813" fill="#1afa29"></path>
</svg>