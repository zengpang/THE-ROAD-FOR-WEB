const fn = (
    (arr) => { 
        let result = 0; 
        for (let index of arr) 
        { 
            if (index > 0 &&typeof(index)=='number')
            {
                result+=index**2;
            }
        } 
        return result;
    }
    
)