//@ts-nocheck
import React, {useEffect, useState} from "react";
import styles from './index.module.less';
import _ from "lodash";

const homeSvg =({color= '#1afa29',size})=>
    (<svg t="1605239018631" className="iconFont" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
         p-id="2341" width={size} height={size}>
        <path
            d="M982.028557 404.405174 573.32303 83.942886c-34.918864-27.694272-89.619352-27.694272-124.538216 0L43.175542 404.577188c-13.933143 11.008903-16.169326 31.134554-5.332437 44.895683s31.134554 16.169326 44.895683 5.332437l13.073072-10.320847 0 387.547791c0 54.872501 56.936671 95.983874 107.852847 95.983874l639.892491 0c50.22812 0 84.1149-38.531161 84.1149-95.983874L927.672098 443.452377l14.449185 11.352931c5.84848 4.644381 12.729044 6.880564 19.781623 6.880564 9.460776 0 18.921552-4.128339 25.286074-12.213002C998.369898 435.539728 995.789686 415.414077 982.028557 404.405174zM607.897867 797.113388l0 66.741475-63.989249 0-63.989249 0-63.989249 0 0-66.741475 0-112.325214c0-37.155048 30.102469-77.234336 95.983874-77.234336 66.053418 0 95.983874 40.079288 95.983874 77.234336L607.897867 797.113388 607.897867 797.113388z"
            p-id="2342" fill={color}></path>
    </svg>);
const topicSvg = ({color= '#1afa29',size})=>(<svg t="1605239363915" className="iconFont" viewBox="0 0 1024 1024" version="1.1"
                          xmlns="http://www.w3.org/2000/svg" p-id="4099" width={size} height={size}>
        <path
            d="M447.924744 928.016126c-1.204099 0-2.408198-0.172014-3.440282-0.172014L157.908953 896.021502c-51.948261-1.032085-93.919704-43.691584-93.919704-95.983874L63.989249 191.967747c0-52.980346 43.175542-95.983874 95.983874-95.983874 1.204099 0 2.408198 0.172014 3.440282 0.172014l286.575508 31.82261c51.948261 1.032085 93.919704 43.691584 93.919704 95.983874l0 607.897867C543.908618 884.840585 500.90509 928.016126 447.924744 928.016126zM158.424996 159.973123c-17.029397 0.860071-30.446498 14.793214-30.446498 31.994625l0 607.897867c0 17.717453 14.449185 31.994625 31.994625 31.994625 1.204099 0 2.408198 0.172014 3.440282 0.172014l286.059466 31.82261c17.029397-0.860071 30.446498-14.793214 30.446498-31.994625L479.919368 223.962372c0-17.545439-14.449185-31.994625-31.994625-31.994625-1.204099 0-2.408198-0.172014-3.440282-0.172014L158.424996 159.973123z"
            p-id="4100" fill={color}></path>
        <path
            d="M609.101965 924.231816c-16.169326 0-29.930455-12.040988-31.82261-28.554342-2.064169-17.545439 10.664875-33.370737 28.382328-35.262893l254.752898-28.382328c1.204099-0.172014 2.236183-0.172014 3.440282-0.172014 17.717453 0 31.994625-14.277171 31.994625-31.994625L895.849488 191.967747c0-17.201411-13.589115-31.134554-30.446498-31.994625l-253.032757 28.0383c-17.201411 2.064169-33.370737-10.664875-35.262893-28.382328-2.064169-17.545439 10.664875-33.370737 28.382328-35.262893l255.096926-28.382328c1.032085-0.172014 2.236183-0.172014 3.440282-0.172014 52.980346 0 95.983874 43.175542 95.983874 95.983874L960.010751 799.865614c0 52.29229-41.971443 94.951789-93.919704 95.983874l-253.204771 28.210314C611.510163 924.231816 610.306064 924.231816 609.101965 924.231816z"
            p-id="4101" fill={color}></path>
        <path
            d="M408.01747 357.961364l-208.137074 0c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C440.012095 343.512179 425.734924 357.961364 408.01747 357.961364z"
            p-id="4102" fill={color}></path>
        <path
            d="M407.845456 542.532505 199.536368 542.532505c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C439.840081 528.255333 425.562909 542.532505 407.845456 542.532505z"
            p-id="4103" fill={color}></path>
        <path
            d="M408.01747 726.415589l-208.137074 0c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C440.012095 712.138418 425.734924 726.415589 408.01747 726.415589z"
            p-id="4104" fill={color}></path>
        <path
            d="M823.947589 358.821435 615.810516 358.821435c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C855.942214 344.544263 841.665043 358.821435 823.947589 358.821435z"
            p-id="4105" fill={color}></path>
        <path
            d="M823.947589 543.564589l-208.137074 0c-17.717453 0-31.994625-14.277171-31.994625-31.994625 0-17.717453 14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625C855.942214 529.115404 841.493029 543.564589 823.947589 543.564589z"
            p-id="4106" fill={color}></path>
        <path
            d="M823.947589 727.447673 615.810516 727.447673c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l208.137074 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S841.665043 727.447673 823.947589 727.447673z"
            p-id="4107" fill={color}></path>
    </svg>)
const discoverSvg = ({color= '#1afa29',size})=><svg t="1605239459213" className="iconFont" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="4275" width={size} height={size}>
    <path
        d="M895.77425 262.953086c-0.361199-0.361199-1.083598-1.083598-1.444797-1.805996-6.140388-5.779189-13.364374-9.029982-20.949559-8.668783-7.585185 0-14.447972 3.250794-19.865961 8.307584-5.05679 5.05679-8.307584 11.558377-8.668783 18.782363 0 0.361199 0 0.361199 0 0.722399 0 0 0 0.361199 0 0.361199 0 7.223986 2.167196 13.725573 6.140388 18.782363l0.361199 0.361199 0 0.361199c5.05679 8.307584 9.752381 16.615168 14.447972 24.922751-31.063139 18.421164-78.741446 57.069489-78.380247 117.389771 0.722399 80.186243-8.307584 96.079012-11.919577 98.968607-6.501587 3.973192-27.451146 3.973192-37.564727 3.973192-16.253968 0-38.287125 0.361199-46.594709 19.143563-1.444797 1.805996-3.973192 5.417989-6.140388 8.307584-30.70194 40.81552-57.069489 79.825044-44.066314 111.971781 6.140388 14.809171 15.17037 29.979541 24.200353 44.788713 7.585185 13.003175 15.892769 26.367549 19.865961 36.481129 9.391182 23.839153 8.307584 33.230335 3.611993 40.093122-11.197178 15.892769-15.892769 35.397531-17.698765 48.761905-0.722399 6.140388-1.083598 11.558377-1.083598 16.253968-56.34709 23.477954-117.389771 33.591534-179.877249 28.895944-42.260317-3.250794-82.714638-12.641975-120.640564-28.534744-7.223986-39.370723-9.029982-64.293474-7.946384-76.213051 4.334392 0.361199 9.752381 0.361199 15.53157-0.722399 13.725573-2.528395 79.102646-26.006349 92.467019-43.705115 13.003175-17.337566 5.779189-39.009524-9.752381-86.326631-2.528395-7.585185-5.05679-14.809171-6.862787-21.671958-0.722399-1.805996-0.361199-9.391182 25.64515-28.534744 2.528395-1.805996 4.334392-3.250794 5.779189-4.334392 3.611993-2.889594 20.22716-12.641975 28.895944-17.698765 16.976367-10.11358 21.671958-12.641975 25.283951-16.253968 12.280776-11.919577 27.812346-64.654674 27.812346-83.075838 0-30.70194-35.75873-42.621517-50.929101-47.678307-16.976367-5.779189-34.675132-9.391182-38.287125-10.11358-7.223986-1.444797-12.280776-2.167196-51.2903 15.53157-31.424339 14.447972-40.81552 21.671958-45.511111 27.451146-7.223986 4.695591-26.728748 10.835979-33.591534 9.391182-27.451146-5.779189-106.192593 6.140388-138.700529 27.812346-16.976367 11.197178-54.541093 34.675132-77.657848 49.123104-3.973192-27.812346-4.695591-55.985891-2.889594-84.520635 3.611993-47.678307 15.53157-93.911817 35.397531-136.533333C182.044444 300.156614 209.495591 261.508289 243.809524 228.277954c3.611993-3.611993 7.585185-6.862787 11.197178-10.47478l46.594709 27.451146L429.82716 296.183422l120.640564 0 70.072663-88.132628 6.862787-77.296649c35.397531 9.752381 68.627866 24.561552 99.691005 44.066314l1.805996 1.083598 1.444797 0 0.361199 0c1.805996 0.722399 3.973192 1.444797 6.501587 1.444797 8.668783 0.722399 16.615168-2.528395 22.755556-8.307584 5.05679-5.05679 7.946384-11.558377 8.668783-18.782363 0.722399-11.558377-5.417989-22.394356-15.892769-28.173545l0 0 0 0c-62.848677-38.648325-131.476543-61.042681-203.716402-66.46067-61.40388-4.695591-121.362963 3.250794-178.793651 22.394356C314.604586 97.52381 263.314286 126.419753 218.886772 165.068078c-7.223986 6.501587-14.447972 13.003175-21.310758 19.865961C162.539683 218.886772 133.643739 258.257496 111.249383 301.601411c-27.812346 54.179894-44.066314 112.332981-48.400705 173.375661-4.695591 61.40388 3.250794 121.362963 22.394356 178.793651 18.782363 55.263492 47.678307 106.192593 86.326631 150.981305s84.520635 80.908642 136.533333 107.63739c54.179894 27.812346 112.332981 44.066314 173.375661 48.400705 61.40388 4.695591 121.362963-3.250794 178.793651-22.394356 55.263492-18.782363 106.192593-47.678307 150.981305-86.326631 7.223986-6.501587 14.447972-13.003175 21.310758-19.865961 35.036332-34.313933 63.932275-73.684656 86.326631-117.028571 27.812346-54.179894 44.066314-112.69418 48.400705-173.375661C975.238095 443.552734 950.315344 347.112522 895.77425 262.953086zM547.578131 117.028571c7.585185 0.361199 15.17037 1.444797 22.755556 2.167196l-5.779189 66.46067L522.29418 238.391534 440.663139 238.391534 326.885362 193.241623l-22.755556-13.725573C375.647266 132.92134 460.167901 110.526984 547.578131 117.028571zM221.053968 764.658907c-36.119929-41.899118-62.487478-89.577425-78.380247-140.867725 10.835979-6.862787 72.601058-44.788713 96.440212-60.681481 18.421164-12.280776 80.908642-21.671958 94.995414-19.143563 26.728748 5.417989 71.51746-8.668783 88.132628-27.451146 8.307584-5.417989 36.842328-18.782363 49.845503-23.839153 10.835979 2.528395 24.561552 6.501587 33.591534 10.47478-2.528395 10.11358-7.223986 23.839153-10.11358 31.424339-3.611993 2.167196-8.668783 5.05679-12.641975 7.585185-17.698765 10.47478-29.618342 17.698765-36.119929 22.755556-0.722399 0.722399-2.167196 1.444797-3.611993 2.528395-16.615168 12.280776-61.40388 45.149912-46.594709 92.10582 2.167196 7.223986 4.695591 14.809171 7.223986 22.755556 3.250794 10.11358 8.307584 24.922751 11.197178 35.75873-15.17037 7.585185-40.454321 18.059965-49.123104 19.504762-1.083598 0.361199-3.973192 0-6.140388-0.361199-10.835979-1.083598-44.066314-4.695591-54.541093 39.731922-3.250794 13.725573-3.250794 34.313933 0 61.40388C274.150265 818.116402 245.97672 793.193651 221.053968 764.658907zM910.222222 537.46455c-3.611993 47.678307-15.53157 93.911817-35.397531 136.533333-19.865961 42.621517-47.317108 81.269841-81.269841 114.500176-5.779189 5.779189-12.280776 11.558377-18.421164 16.976367-11.197178 9.752381-22.755556 18.782363-35.036332 26.728748 19.504762-34.675132 5.05679-71.51746-1.444797-87.410229-5.779189-14.809171-15.17037-29.979541-24.200353-45.149912-7.223986-11.919577-14.447972-24.200353-19.143563-34.313933 1.083598-6.862787 8.668783-22.033157 35.397531-57.791887 1.083598-1.805996 2.528395-3.250794 3.250794-4.334392 1.444797 0 2.528395 0 3.611993 0 19.504762 0 45.87231-0.361199 65.738272-11.558377 35.036332-19.865961 41.537919-70.072663 41.17672-149.536508-0.361199-28.895944 24.200353-50.567901 44.066314-63.571076C906.971429 429.104762 914.195414 482.923457 910.222222 537.46455z"
        p-id="4276" fill={color}></path>
</svg>
export default ({setLoadStart}) => {
    const [ active, setActive] = useState('content');

    return (<div
        className={styles.container}
    >
        <img width='250' height={'184'} src={'/logo.svg'} className={styles.logo} />
        {
            [{
                title:'内容',
                icon: homeSvg,
                key: 'content',
            },{
                title:'话题',
                icon: topicSvg,
                key: 'topic',
            },{
                title:'发现',
                icon: discoverSvg,
                key: 'discover',
            }].map((v,key) => (<div onClick={()=>{
                setActive(v.key);
            }}
                                    onTouchStartCapture={_.debounce(()=>{
                                        if(v.key === 'content'){
                                            document.body.scrollTo(0,0)
                                            setLoadStart(true);
                                        }

                                    },500)}

                                    className={styles.iconCon} key={key}>
                <span

                ><v.icon size={50} color={active === v.key?'#43e413':'gray'}></v.icon></span>
                <span className={`${styles.title} ${active === v.key?styles.active:''}`}>{v.title}</span>
            </div>))
        }
        <style jsx>{`
      
        `}</style>
        <style jsx global>{`
           
        `}</style>

    </div>);
}