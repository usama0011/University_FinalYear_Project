import style from '../styles/VCMessage.module.css';
import Image from 'next/image'

const VCMessage = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          className={style.image}
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fFBlb3BsZSUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="VC"
          width={300}
          height={300}
          objectFit="cover"
        />
      </div>
      <div className={style.messageContainer}>
        <p className={style.vcMessage}>"God has called us into every realm of human endeavour to be agents of positive change in the world. Redeemer University helps students to understand that God has invited us to join him in his restorative work. Redeemer equips students and graduates to make an impact in all realms of life."</p>
        <p>VC Name</p>
        <p>VC Rank</p>
      </div>
    </div>
  )
}

export default VCMessage;
