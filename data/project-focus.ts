export function matchesProjectFocus(slug: string, focus: string) {
 const software=["ops-system","citoyen-actif","projet-depression","ecomos-ai","bibliotheque-universitaire","gestion-chantier","tekplateform"];
 const data=["eeg-causal","causal-smoking","projet-depression","ecomos-ai"];
 return focus==="software"?software.includes(slug):focus==="data"?data.includes(slug):true;
}
