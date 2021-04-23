<template>
    <div>
            <div class="card" style="width: 18rem;">
        <img :src="image" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">{{ card.name }}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div class="row1" style="margin-bottom: 0px">
            <!--<a :href="card.url" class="btn btn-dark">View info</a>-->
            <a href="/Intel" class="btn btn-dark">View info</a>
            <SuperButton
                :card="card"
            />
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import SuperButton from './SuperButton'

export default {
    components: {
        SuperButton
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    computed: {
        image() {
            return this.card.img
        }
    }
}
</script>
