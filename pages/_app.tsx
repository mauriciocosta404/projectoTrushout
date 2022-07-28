import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/Global';
import MainContainer from '../src/components/mainContentainer/MainContainer';

import { createServer,Model } from 'miragejs';
import trash1 from '../public/images/beige-16875_1920.jpg';
import trash2 from '../public/images/lcd.jpg';
import avatar1 from '../public/images/269796429_907875379913390_4775710928716066908_n.jpg';
import avatar2 from '../public/images/eu e crianças.jpg';

 createServer({
    models:{
        post: Model,
        user:Model,
    },
    seeds(server){
        server.db.loadData({
            posts:[
                {
                    id:1,
                    image:trash1,
                    text:'ola eu sou o Mauricio costa e tenho materiais reciclaveis como computador estragado e telefone estragado',
                },
                {
                    id:2,
                    image:trash2,
                    text:'ola eu sou o Fabio junik costa e tenho materiais reciclaveis como hd , pendrives e fogão estragado',
                }
            ],
            users:[
              {
                  id:1,
                  userName:'Mauricio Costa',
                  userEmail:'mc611641@gmail.com',
                  password:'mc241839',
                  picture:avatar1,
              },
              {
                id:2,
                userName:'Fabio Junik',
                userEmail:'junik@gmail.com',
                password:'junik*',
                picture:avatar2,
              }
          ]
        })
    },
  
  routes(){
    this.namespace='api';
  
    this.get('/posts',()=>{
      return this.schema.all('post')
    })
    this.get('/users',()=>{
      return this.schema.all('user')
    })
  
    this.post('/posts',(schema,request)=>{
        const data=JSON.parse(request.requestBody)
  
        return schema.create('post', data);
    })
    this.post('/users',(schema,request)=>{
        const data=JSON.parse(request.requestBody)
  
        return schema.create('user', data);
    })
  }
  })

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <GlobalStyle/>
   <MainContainer>
      <Component {...pageProps} />
   </MainContainer>
    
  </>)
}
export default MyApp