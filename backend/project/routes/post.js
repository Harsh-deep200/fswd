const router =require(`express`).Router();

router.get(`/`,(req,res)=>{
    console.log(`post called`)
    res.json({
        id:"123",
        title:"hello"
    });
});

router.get("/all",(req,res)=>{
    console.log(`post/all called`);
    res.json({
        data:[
            {
                title:"hello"
            },
            {
                title:"hi"
            }
        ]
    });
});

module.exports=router;