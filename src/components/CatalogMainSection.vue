<template>
    <div class="container">
        <div>
            <h1 class="title"><span class="title-green">Быстрая</span> <br>  доставка <br> продуктов</h1>
            <p class="description"> 
                Мы гарантируем быструю доставку качественных и <br> свежих продуктов в максимально короткие сроки, <br> чтобы вы могли наслаждаться покупками без хлопот.
            </p>
        </div>
        
        <img
            src="/logo.svg"
            class="logo-image"
        />
    </div>
    
</template>

<script>

</script>

<style scoped>
.title{
    font-size: 70px;
    line-height: 80px;
    /* margin-top: 111px; */
    margin-bottom: 63px;
}
.title-green{
    color:#0CD467
}
.description{
    font-size: 22px;
    margin-bottom: 170px;
}
.container{
    display: flex;
    justify-content: space-between;
    margin-top: 111px;
}
.logo-image{
    width: 500px;
    height: 500px;
}
</style>