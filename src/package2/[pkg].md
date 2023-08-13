- package name is {{ $params.pkg }}

<!-- @content -->


<script setup>
import { useData } from 'vitepress'

// params is a Vue ref
const { params } = useData()

console.log(params.value)
</script>