import React from 'react';
import Publish from "./Publish";
import Post from './Post';

export default () => {

    const version = 1;

    return <div style={{marginLeft: '250px', width: '100%',}}>
        <div style={{
            width: '100%',
            borderBottom: '1px solid #8080803b',
            // position: 'fixed'
        }}>
            {
                version === 1 ?
                    <div className={'list'}>
                        <span>热门频道</span>
                        {
                            [{},{},{},{},{},{}].map(({ imgUrl= '/vercel.svg',title = '车达人'})=>{
                                return (<div className={'item'} >
                                    <img src={imgUrl} className={'img'}  width={60} height={60}/>
                                    <span>{title}</span>
                                </div>)
                            })
                        }

                    </div> :
                    <div style={{display: 'flex'}}>
                        <img width={'100'}
                             height={'100'}
                             style={{
                                 borderRadius: '50px',
                                 padding: '8px 0 0 13px',
                                 margin: '10px'
                             }}
                             src={'/image.jpg'}
                        />
                        <Publish></Publish>
                    </div>
            }

        </div>
        {
            [{}, {}, {}].map(() => {
                return <Post></Post>
            })
        }
        <div>
        </div>
        <style jsx>{`
        .list{
            display: flex;
            color: white;
            align-items:center;
            padding: 0 10px;
            >span{
                font-size:25px;
                margin-right:15px;
                color:yellow;
            }
            .item{
                padding:10px;
                display: flex;
                flex-direction: column;
                .img{
                    border-radius:30px;
                    background-color:white;
                }
                span{
                    margin-top:10px;
                    text-align: center;
                    color: white;
                }
                
            }
        }
            
        
        `}</style>
    </div>
}