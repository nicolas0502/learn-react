const headConfig = (head) => {
    const{tittle, description, keywords, canonical} = head

    if(tittle){
        document.title = tittle
    }
    if(canonical){
        const can = document.querySelector('link[rel=canonical]')
        if(can){
            can.setAttribute('href', canonical)
        }else{
            const newCan = document.createElement('link')
            newCan.setAttribute('rel' , 'canonical')
            newCan.setAttribute('href', canonical)
            document.querySelector('head tittle').after(newCan)
        }
    }
    if(keywords){
        const keys = document.querySelector('meta[name=keywords]')
        if(keys){
            keys.setAttribute('content', keywords)
        }else{
            const newKeys = document.createElement('meta')
            newKeys.setAttribute('name' , 'keywords')
            newKeys.setAttribute('content', keywords)
            document.querySelector('head tittle').after(newKeys)
        }
    }
    if(description){
        const descri = document.querySelector('meta[name=description]')
        if(descri){
            descri.setAttribute('content', description)
        }else{
            const newDescri = document.createElement('meta')
            newDescri.setAttribute('name' , 'description')
            newDescri.setAttribute('content', description)
            document.querySelector('head tittle').after(newDescri)
        }
    }

}

export default headConfig