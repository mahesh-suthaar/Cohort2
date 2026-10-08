 try{
        consoley.log('this is try');
        
    }
    catch(err){
        console.log('name:=',err.name);
        console.log('message:=',err.message);
        console.log('stack:=',err.stack);

    }