<template>
	<div>
		<div id="main">
			<div class="container">
				<div class="row">
					<div class="col-md">
						<AppItemList title="Prefixos" type="prefix" :items="items.prefix" v-on:addItem="addItem" v-on:deleteItem="deleteItem" />
					</div>
					<div class="col-md">
						<AppItemList title="Sufixos" type="sufix" :items="items.sufix" v-on:addItem="addItem" v-on:deleteItem="deleteItem" />
					</div>
				</div>
				<br>
				<h5>Domínios <span class="badge bg-info">{{ domains.length }}</span></h5>
				<div class="card">
					<div class="card-body">
						<ul class="list-group">
							<li class="list-group-item" v-for="domain in domains" v-bind:key="domain.name">
								<div class="row">
									<div class="col-md-6">
										{{ domain.name }}
									</div>
									<div class="col-md-3">
										<span class="badge bg-success" v-if="domain.available">Disponível</span>
										<span class="badge bg-danger" v-else>Indisponível</span>
									</div>
									<div class="col-md-3 text-end">
										<a class="btn btn-info" v-bind:href="domain.checkout" target="_blank">
											<span class="fa fa-shopping-cart"></span>
										</a>
										&nbsp;
										<button class="btn btn-info" @click="openDomain(domain)">
											<span class="fa fa-search"></span>
										</button>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import AppItemList from "@/components/AppItemList.vue";

export default {
	name: "App",
	components: {
		AppItemList
	},

	data () {
		return {};
	},

	methods: {
		...mapActions(["addItem", "deleteItem", "getItems", "generateDomains"]),

		openDomain(domain) {
			this.$router.push({
				path: `/domains/${domain.name}`
			});
		}
	},

	computed: {
		...mapState(["items", "domains"])
	}
};
</script>

<style>

</style>
