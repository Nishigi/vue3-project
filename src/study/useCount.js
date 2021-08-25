import { ref } from "vue";

export default function useCount(arg) {
    let count = ref(arg)
    const setCount = val => {
        count.value += val
    }
    return [count, setCount]
}