import React from "react";

export default ({name= '车王',
                    time= '2020-10-28 18:00',
                    description= '9月，两款备受瞩目的新款车型——奔驰E级(参数|询价)和宝马5系，在万众期待的2020北京车展上接连上市。强强相遇，注定掀起一场波澜。新款国产奔驰E级共推出12款车型，售价区间为43.08-64.28万元；新款宝马5系推出17款车型，售价区间为42.69-60.39万元。'
}) =>{

    return <div style={{padding: '10px 23px',width: 'fit-content',
        display: 'flex',
        borderLeft: '1px solid rgba(128, 128, 128, 0.23)',
        borderRight: '1px solid rgba(128, 128, 128, 0.23)',
        borderBottom: '1px solid rgba(128, 128, 128, 0.23)'}}>


        <img width={60} height={60} src={'/auto-sales-cube.png'} className={'avatar'} />
        <div className={'content'} >
            <div style={{margin: '0 0 10px 0'}}>
                <div className={'name'}>{name}</div>
                <div className={'time'}>时间 {time}</div>
            </div>
            <div>
                {
                    description
                }
            </div>
            <div className={'extraContent'}>

            </div>
        </div>



        <style jsx>{`
            .avatar{
                border: 1px solid yellow;
                border-radius: 30px;
                margin-left:10px;
            }
            .extraContent{
                width: 40vw;
                margin: auto;
                min-height: 10vw;
                border: 1px solid gray;
                border-radius: 5px;
                background-color: #bfffab;
                margin-top:10px;
              
            }
            .content{
                margin: 0px 20px 0px 40px;
                width:  45vw;
                color: white;
                font-size:16px;
                line-height: 25px;
                font-weight: 200;
            }
            .name{
                color: #43e413;
                font-size:20px;
            }
            .time{
                color: #f1acd1db;
                font-size:16px;
            }
         
        `}</style>
    </div>
}