export interface ChemicalCompoundItem {
  sr: number;
  brandName: string;
  form: string;
  activeIngredients: string;
  packDetail: string;
}

export const CHEMICAL_PRODUCT_CATEGORIES: string[] = [
  'Building Blocks',
  'Coelenterazines',
  'Drugs and Metabolites',
  'Glitazones',
  'GMP APIs Excipients and Diagnostic',
  'Heterocycles',
  'Labelled Compounds',
  'Metabolites & Impurities',
  'Natural Compounds',
  'Nucleic Acids',
  'Organometallics',
  'Peptides',
  'Steroids'
];

export const CHEMICAL_COMPOUNDS_CATALOGUE: ChemicalCompoundItem[] = [
  {
    sr: 1,
    brandName: 'VIROBRUT POWDER',
    form: 'POWDER',
    activeIngredients: 'Each 100g contains : Sodium Chloride 1.5%w/w + Salt containing Potassium Monopersulphate/ Potassium Hydrogen Sulphate/ Potassium Sulphate 49.8% w/w + Buffer and Excipients q.s. to 100%',
    packDetail: '100g, 500g, 1Kg'
  },
  {
    sr: 2,
    brandName: 'VITAKIND-P LIQUID',
    form: 'LIQUID',
    activeIngredients: 'Each 30ml contains: Ferrous Gluconate 200mg + Ferrous Chloride 80mg + Thiamine Hydrochloride 5mg + Riboflavin 5 mg + Nicotinic Acid 20mg + Nicotinamide 45mg + Calcium Lactate 300mg + Liver Fraction 150mg + Silymarin75 mg + Andrographis paniculata 900mg + Azadirachta indica 900mg',
    packDetail: '1 Ltr, 5 Ltr, 30 Ltr'
  },
  {
    sr: 3,
    brandName: 'TOXYOVER POWDER',
    form: 'POWDER',
    activeIngredients: 'Toxin Binders (HSCAS, MOS, Activated Charcoal) + Organic Acids + Oxine copper + Choline Chloride',
    packDetail: '25 Kg'
  },
  {
    sr: 4,
    brandName: 'TOTAVIT GOLD LIQUID',
    form: 'LIQUID',
    activeIngredients: 'COMPOSITION: Each 1 Litre Contains: Vitamin A 1,00,00,000 IU + Vitamin D3 20,00,000 IU + D-Panthenol 15g + Vitamin E Acetate 8g + DL- Methionine 5g + Vitamin K3 5g + Riboflavin-5-Phosphate 4g +Taurine 3.5gm + Thiamine Hydrochloride 3.5g + L-Lysine 2.5g + Pyridoxine Hydrochloride 2g + L-Leucine 1.5g + L-Aspartic Acid 1.45g + L-Glutamic Acid 1.16g + L- Valine 1.1g + L- Alanine 975mg + L-Histidine 900mg + L-Phenylalanine 810mg + L- Serine 680mg + L- Glycine 575mg + L- Proline 510mg + L-Threonine 500mg + L- Arginine 490mg + Choline Chloride 400mg + L- Tyrosine 340mg + L- Cysteine 150mg + L- Isoleucine 125mg +Tryptophan 75mg + Vitamin B12 10mg + Inositol 2.5mg + Biotin 2mg + Lycopene 25mcg',
    packDetail: '1 Ltr'
  },
  {
    sr: 5,
    brandName: 'RESPOHERB LIQUID',
    form: 'LIQUID',
    activeIngredients: 'Eucalyptus Oil 30% v/v + Peppermint Oil 19% v/v + Menthol 7% v/v + Calamus Oil 2% v/v',
    packDetail: '250ml, 1 Ltr'
  },
  {
    sr: 6,
    brandName: 'POLTAGRO LIQUID',
    form: 'LIQUID',
    activeIngredients: 'Each 500 ml contains: Methionine Activity (MHA) 127.6g+ Lysine hydrochloride 63.125g + Choline chloride 63.125g +Betaine 9.9g + Magnesium 595.4mg+ Sodium 459mg+ Manganese 384.55 mg+ Iron 223.4mg + Zinc 215.7mg+ Cobalt 206.25 mg + Copper 158.5 mg+ Phosphorus 154.16mg',
    packDetail: '500ml, 1 Ltr, 5 Ltr'
  },
  {
    sr: 7,
    brandName: 'HEPAWAYS LIQUID',
    form: 'LIQUID',
    activeIngredients: 'Each 10ml Contains: Liver Fraction 1.25g + Yeast Extract 0.4g + Nicotinic Acid 24mg + Alcohol 1ml',
    packDetail: '2 Ltr, 5 Ltr'
  },
  {
    sr: 8,
    brandName: 'HEPAMUST POWDER',
    form: 'POWDER',
    activeIngredients: 'Azadirachta indica + Emblica officinalis + Terminalia chebula + Andrographis paniculata + Tephrosia purpurea + Phyllanthus niruri + Eclipta alba + Fumaria officinalis + Tinospora cordifolia + Ocimum basilicum',
    packDetail: '15Kg'
  },
  {
    sr: 9,
    brandName: 'GUDLORIC VET POWDER',
    form: 'POWDER',
    activeIngredients: 'Allopurinol 5% w/w',
    packDetail: '100g'
  },
  {
    sr: 10,
    brandName: 'ENROSTRONG-BM 20% SOLUTION',
    form: 'LIQUID',
    activeIngredients: 'Enrofloxacin 200 mg + Bromhexine 15mg in each ml',
    packDetail: '1 Ltr'
  },
  {
    sr: 11,
    brandName: 'ELECTROBEST-P POWDER',
    form: 'POWDER',
    activeIngredients: 'Each 100 gm contains: Maltodextrin 41gm + Sodium Citrate 6.5gm + Potassium Chloride 5gm + Sodium Bicarbonate 3gm + Calcium Lactate 1.7gm + Magnesium Sulphate 1gm + Sodium Chloride 0.8gm + Sodium Acid Phosphate 0.8gm + Amla Extract 0.8gm + Vitamin C 600mg + Lactobacillus Sporogenes 3000 million + Dextrose q.s.',
    packDetail: '1 KG'
  },
  {
    sr: 12,
    brandName: 'COLIGYL VET POWDER',
    form: 'POWDER',
    activeIngredients: 'Colistin sulphate eq. to Colistin 100 mg/ g',
    packDetail: '200g, 1Kg'
  },
  {
    sr: 13,
    brandName: 'BIRTYBROM POWDER',
    form: 'POWDER',
    activeIngredients: 'Tylosine Tartrate 66.6g + Bromhexine Hydrochloride 3g in each 100 g',
    packDetail: '100g'
  },
  {
    sr: 14,
    brandName: 'BIRDICARE POWDER',
    form: 'POWDER',
    activeIngredients: 'Vitamin E 20g + Selenium 200mg + Zinc 180mg in each 200g',
    packDetail: '200g'
  },
  {
    sr: 15,
    brandName: 'ACIDAPURE POWDER',
    form: 'POWDER',
    activeIngredients: 'Acetic Acid + Formic Acid + Propionic Acid + Benzoic Acid + Sorbic Acid + Butyric Acid + Oxine Copper',
    packDetail: '25 Kg'
  },
  {
    sr: 16,
    brandName: 'ACIDAPURE LIQUID',
    form: 'LIQUID',
    activeIngredients: 'Lactic Acid + Formic Acid + Citric Acid + Sodium Citrate + Butyric Acid + Oxine Copper+ Essential oil + Purified Water',
    packDetail: '1 Ltr, 5 Ltr'
  },
  {
    sr: 17,
    brandName: 'VIROBRUT POWDER',
    form: 'POWDER',
    activeIngredients: 'Each 100g contains : Sodium Chloride 1.5% w/w + Salt containing Potassium Monopersulphate / Potassium Hydrogen Sulphate / Potassium Sulphate 49.8% w/w + Buffer and Excipients q.s. to 100%',
    packDetail: '100g, 500g, 1 Kg'
  },
  {
    sr: 18,
    brandName: 'VITAKIND-P LIQUID',
    form: 'LIQUID',
    activeIngredients: 'Each 30ml contains: Ferrous Gluconate 200mg + Ferrous Chloride 80mg + Thiamine Hydrochloride 5mg + Riboflavin 5mg + Nicotinic Acid 20mg + Nicotinamide 45mg + Calcium Lactate 300mg + Liver Fraction 150mg + Silymarin 75mg + Andrographis paniculata 900mg + Azadirachta indica 900mg',
    packDetail: '1 Ltr, 5 Ltr, 30 Ltr'
  },
  {
    sr: 19,
    brandName: 'TOXYOVER POWDER',
    form: 'POWDER',
    activeIngredients: 'Toxin Binders (HSCAS, MOS, Activated Charcoal) + Organic Acids + Oxine copper + Choline Chloride',
    packDetail: '25 Kg'
  },
  {
    sr: 20,
    brandName: 'TOTAVIT GOLD LIQUID',
    form: 'LIQUID',
    activeIngredients: 'Each 1 Litre Contains: Vitamin A 1,00,00,000 IU + Vitamin D3 20,00,000 I U + D-Panthenol 15g + Vitamin E Acetate 8g + DL- Methionine 5g + Vitamin K3 5g + Riboflavin-5-Phosphate 4g +Taurine 3.5g + Thiamine Hydrochloride 3.5g + L-Lysine 2.5g + Pyridoxine Hydrochloride 2g + L-Leucine 1.5g + L-Aspartic Acid 1.45g + L-Glutamic Acid 1.16g + L- Valine 1.1g + L- Alanine 975mg + L-Histidine 900mg + L-Phenylalanine 810mg + L- Serine 680mg + L- Glycine 575mg + L- Proline 510mg + L-Threonine 500mg + L- Arginine 490mg + Choline Chloride 400mg + L- Tyrosine 340mg + L- Cysteine 150mg + L- Isoleucine 125mg +Tryptophan 75 mg + Vitamin B12 10mg + Inositol 2.5mg + Biotin 2mg + Lycopene 25mcg',
    packDetail: '1 Ltr'
  },
  {
    sr: 21,
    brandName: 'RESPOHERB LIQUID',
    form: 'LIQUID',
    activeIngredients: 'Eucalyptus Oil 30% v/v + Peppermint Oil 19% v/v + Menthol 7% v/v + Calamus Oil 2% v/v',
    packDetail: '250ml, 1 Ltr'
  },
  {
    sr: 22,
    brandName: 'POLTAGRO LIQUID',
    form: 'LIQUID',
    activeIngredients: 'Each 500 ml contains: Methionine Activity (MHA) 127.6g+ Lysine hydrochloride 63.125g + Choline chloride 63.125g+ Betaine 9.9g + Magnesium 595.4mg+ Sodium 459mg+ Manganese 384.55mg+ Iron 223.4mg + Zinc 215.7mg+ Cobalt 206.25mg + Copper 158.5 mg+ Phosphorus 154.16mg',
    packDetail: '500ml, 1 Ltr, 5 Ltr'
  },
  {
    sr: 23,
    brandName: 'HEPAWAYS LIQUID',
    form: 'LIQUID',
    activeIngredients: 'Each 10ml Contains: Liver Fraction 1.25g + Yeast Extract 0.4g + Nicotinic Acid 24mg + Alcohol 1 ml',
    packDetail: '2 Ltr, 5 Ltr'
  },
  {
    sr: 24,
    brandName: 'GUDLORIC VET POWDER',
    form: 'POWDER',
    activeIngredients: 'Allopurinol 5% w/w',
    packDetail: '100g'
  },
  {
    sr: 25,
    brandName: 'ENROSTRONG-BM 20% SOLUTION',
    form: 'LIQUID',
    activeIngredients: 'Enrofloxacin 200mg + Bromhexine 15mg in each ml',
    packDetail: '1 Ltr'
  },
  {
    sr: 26,
    brandName: 'COLIGYL-VET POWDER',
    form: 'POWDER',
    activeIngredients: 'Colistin sulphate eq. to Colistin 100 mg/ g',
    packDetail: '200g, 1 Kg'
  },
  {
    sr: 27,
    brandName: 'BIRTYBROM POWDER',
    form: 'POWDER',
    activeIngredients: 'Tylosine Tartrate 66.6g + Bromhexine Hydrochloride 3g in each 100g',
    packDetail: '100g'
  },
  {
    sr: 28,
    brandName: 'BIRDICARE POWDER',
    form: 'POWDER',
    activeIngredients: 'Vitamin E 20g + Selenium 200mg + Zinc 180mg in each 200g',
    packDetail: '200g'
  },
  {
    sr: 29,
    brandName: 'ACIDAPURE POWDER',
    form: 'POWDER',
    activeIngredients: 'Acetic Acid + Formic Acid + Propionic Acid + Benzoic Acid + Sorbic Acid + Butyric Acid + Oxine Copper',
    packDetail: '25 Kg'
  },
  {
    sr: 30,
    brandName: 'ACIDAPURE LIQUID',
    form: 'LIQUID',
    activeIngredients: 'Lactic Acid + Formic Acid + Citric Acid + Sodium Citrate + Butyric Acid + Oxine Copper+ Essential oil + Purified Water',
    packDetail: '1 Ltr, 5 Ltr'
  },
  {
    sr: 31,
    brandName: 'OFLOKIND-OZ PET',
    form: 'SUSP.',
    activeIngredients: '(OFLOXACIN 50mg + ORNIDAZOLE 125mg) / 5ml',
    packDetail: '30 ml & 90ml'
  },
  {
    sr: 32,
    brandName: 'NUFORCE PET',
    form: 'SHAMPOO',
    activeIngredients: 'KETOCONAZOLE 2% w/v + CHLORHEXIDINE 2% w/v + CETRIMIDE 0.1% w/v',
    packDetail: '200 ml'
  },
  {
    sr: 33,
    brandName: 'MULTISTAR PET',
    form: 'SYRUP',
    activeIngredients: 'L-leucine 18.3mg + L-Isoleucine 5.9mg + L-Lysine 25mg + L-Phenylalanine 5mg + L-Threonine + L-Methionine 9.2mg + L-Tryptophan 5mg + L-Valine 6.7mg + Thiamine 5.5mg + Riboflavine 3mg + Pyridoxine 1.2mg + Nicotinamide 25mg + Calcium Pantothenate 5mg + Cyanocobalamin',
    packDetail: '200 ml'
  },
  {
    sr: 34,
    brandName: 'EXTICK',
    form: 'POWDER',
    activeIngredients: 'PROPOXUR 10mg /gm',
    packDetail: '100 gm'
  },
  {
    sr: 35,
    brandName: 'EXTICK',
    form: 'SOAP',
    activeIngredients: 'PERMETHRIN 1% w/w + CETRIMIDE 0.5% w/w + ALOE VERA 0.5% w/w',
    packDetail: '75 gm'
  },
  {
    sr: 36,
    brandName: 'EXTICK',
    form: 'SHAMPOO',
    activeIngredients: 'PROPOXUR 1mg/ ml',
    packDetail: '200 ml'
  },
  {
    sr: 37,
    brandName: 'HEPAMUST',
    form: 'SYRUP',
    activeIngredients: 'HERBAL PREPARATION (Azadirachta indica, Phyllanthus niruri, Andrographis paniculata extracts)',
    packDetail: '200 ml'
  },
  {
    sr: 38,
    brandName: 'CURABLESS',
    form: 'CREAM',
    activeIngredients: 'OFLOXACIN 0.75% w/w + ORNIDAZOLE 2% w/w + TERBINAFINE 1% w/w + CLOBETASOL 0.05% w/w',
    packDetail: '15 gm'
  },
  {
    sr: 39,
    brandName: 'CALCIMUST PET',
    form: 'LIQUID',
    activeIngredients: '(Vit. A 45,000 IU + Vit. D3 8000 IU + Vit. B12 100mcg + Calcium 1628mg + Phosphorus 838.5mg) / 100ml',
    packDetail: '200 ml'
  },
  {
    sr: 40,
    brandName: 'BANDYSTAR PLUS',
    form: 'BOLUS',
    activeIngredients: 'PRAZIQUANTEL 50mg + PYRANTEL 144mg + FEBANTEL 150mg',
    packDetail: '1 Tab'
  },
  {
    sr: 41,
    brandName: 'BANDYSTAR',
    form: 'BOLUS',
    activeIngredients: 'PRAZIQUANTEL 50mg + IVERMECTIN 2mg',
    packDetail: '1 Tab'
  },
  {
    sr: 42,
    brandName: 'APTIQUIK',
    form: 'SYRUP',
    activeIngredients: 'BUCLIZINE 12mg / 5ml',
    packDetail: '200 ml'
  },
  {
    sr: 43,
    brandName: 'ZOKILL-RTU INJ.',
    form: 'Injection',
    activeIngredients: '(DIMINAZENE ACETURATE 70mg + PHENAZONE 375mg) / ml',
    packDetail: '30 ml & 90ml'
  },
  {
    sr: 44,
    brandName: 'VITAKIND-LIV NF',
    form: 'Injection',
    activeIngredients: '(Niacinamide 100mg + Pyridoxine 3mg + Folic acid 1.5mg + Vit. B12 10mcg + Liver Inj. crude 0.66ml) / ml',
    packDetail: '30 ml & 90ml'
  },
  {
    sr: 45,
    brandName: 'VITAKIND-LIV (NF)',
    form: 'SYRUP',
    activeIngredients: '(FERROUS CHLORIDE 80mg, FERROUS GLUCONATE 200mg + Thiamine 5mg + Riboflavin 5mg + Nicotinic acid 20mg + Nicotinamide 45mg + CALCIUM LACTATE 300mg + LIVER FRACTION 2 150mg + SILYMARIN 150mg) / 30ml',
    packDetail: '500 ML, 1 Ltr. & 5 Ltr.'
  },
  {
    sr: 46,
    brandName: 'VERMACT-VET',
    form: 'ORAL SOLUTION',
    activeIngredients: 'IVERMECTIN 0.8mg / ml',
    packDetail: '500 ml & 1 Ltr.'
  },
  {
    sr: 47,
    brandName: 'VERMACT-VET',
    form: 'Injection',
    activeIngredients: 'IVERMECTIN 10mg / ml',
    packDetail: '10 ml, 50ml'
  },
  {
    sr: 48,
    brandName: 'VERMACT PLUS VET',
    form: 'SUSP.',
    activeIngredients: '(TRICLABENDAZOLE 50mg + IVERMECTIN 1mg) / ml',
    packDetail: '100 ml, 250ml & 500ml'
  },
  {
    sr: 49,
    brandName: 'UTRASAFE',
    form: 'LIQUID',
    activeIngredients: 'FEED SUPPLEMENT (Herbal Galactagogue & Uterine Tonic Formula)',
    packDetail: '450 ml & 900ml'
  },
  {
    sr: 50,
    brandName: 'TOTAVIT STRONG',
    form: 'MIXTURE',
    activeIngredients: 'Each kg contains: Vitamin A 750000 IU + Vitamin D3 75000 IU + Vitamin E 300 mg + Niacinamide 1.200 g + Vitamin B6 20 mg + D.L. Methionine 1.929 g + L. Lysine 4.40 g + Lactobacillus sporogenes 75 billion CFU + Saccharomyces cerevisiae 15 billion CFU + Copper 4.5g',
    packDetail: '1 KG, 5 KG & 25 KG'
  },
  {
    sr: 51,
    brandName: 'TONAKIND-GOLD',
    form: 'POWDER',
    activeIngredients: 'Saccharomyces cerevisiae 1000 billion CFU + Lactobacillus acidophilus 30,000 million CFU + Lactobacillus sporogenes 30,000 million CFU + Bacillus subtilis 60,000 million CFU + Bacillus licheniformis 60,000 million CFU + Fructo Oligo Saccharide 5000mg',
    packDetail: '60 gm, 125gm & 1kg'
  },
  {
    sr: 52,
    brandName: 'TONAKIND HERBAL',
    form: 'POWDER',
    activeIngredients: 'Pueraria tuberosa 10 gm + Hemidesmus indicus 5 gm + Phyllanthus niruri 10 gm + Terminalia chebula 5 gm + Andrographis paniculata 15 gm + Trachyspermum ammi 16 gm + Pimpinella anisum 4 gm + Zingiber officinalis 2 gm + Leptadenia reticulata 5 gm + Boerhavia diffusa 5 gm',
    packDetail: '500GM'
  },
  {
    sr: 53,
    brandName: 'TONAKIND',
    form: 'BOLUS',
    activeIngredients: 'Live yeast culture 1.5gm + Protein Hydrolysate 750mg + Tribasic Calcium Phosphate 2.4gm + Live L. sporogenes 20million spores + Liver extract 5mg + Vit A 1600 IU + Vit. D3 4000 IU + Vit. B12 30mcg + Vit. E 75mg + Selenium 0.1 mg + Copper Sulphate 25mg',
    packDetail: '2 BOLUS'
  },
  {
    sr: 54,
    brandName: 'SERAKIND',
    form: 'BOLUS',
    activeIngredients: 'SERRATIOPEPTIDASE 60mg',
    packDetail: '2 BOLUS'
  },
  {
    sr: 55,
    brandName: 'SANTAWORM',
    form: 'SOLUTION',
    activeIngredients: 'CLOSANTEL 150mg / ml',
    packDetail: '30 ML, 100ML & 500ML'
  },
  {
    sr: 56,
    brandName: 'REPREGNA',
    form: 'Injection',
    activeIngredients: 'CLOPROSTENOL SODIUM 250mcg / ml',
    packDetail: '2 ML'
  },
  {
    sr: 57,
    brandName: 'RAFFOLEV PLUS',
    form: 'SUSP.',
    activeIngredients: 'RAFOXANIDE 3% w/v + LEVAMISOLE 3% w/v',
    packDetail: '100 ml'
  },
  {
    sr: 58,
    brandName: 'OVULANTA-KIT',
    form: 'TABS.',
    activeIngredients: '1 Tab. of CLOMIPHENE CITRATE 300mg + 2 Tabs. of COPPER SULPHATE 750mg each',
    packDetail: '1 KIT'
  },
  {
    sr: 59,
    brandName: 'OVULANTA',
    form: 'Injection',
    activeIngredients: 'BUSERELIN ACETATE 4mcg / ml',
    packDetail: '2.5 ML & 5ML'
  },
  {
    sr: 60,
    brandName: 'OFLOKIND-OZ I.U.',
    form: 'LIQUID',
    activeIngredients: '(OFLOXACIN 50mg + ORNIDAZOLE 125mg) / 5ml',
    packDetail: '60 ML'
  },
  {
    sr: 61,
    brandName: 'OFLOKIND-OZ',
    form: 'BOLUS',
    activeIngredients: 'OFLOXACIN 1000mg + ORNIDAZOLE 2500mg',
    packDetail: '2 BOLUS'
  },
  {
    sr: 62,
    brandName: 'OFLOKIND',
    form: 'BOLUS',
    activeIngredients: 'OFLOXACIN 1000mg',
    packDetail: '2 BOLUS'
  },
  {
    sr: 63,
    brandName: 'NUROKIND-PLUS VET (RF)',
    form: 'Injection',
    activeIngredients: '(METHYLCOBALAMIN 500mcg + PYRIDOXINE 50mg + NICOTINAMIDE 50mg) / ml',
    packDetail: '5 ml, 30ml'
  },
  {
    sr: 64,
    brandName: 'MULTISTAR',
    form: 'LIQUID',
    activeIngredients: '(Vit. A 1,20,000 IU + Vit. D3 60,000 IU + Vit. E 15mg + Vit.H 1.5mg + Vit. C 10mg + Zinc 180mg + Cobalt 1mg + Selenium 1mg) / 10ml',
    packDetail: '60 ML, 100ML, 500ML & 1 LTR.'
  },
  {
    sr: 65,
    brandName: 'MOXIKIND-SB 4.5',
    form: 'Injection',
    activeIngredients: '(AMOXYCILLIN 3gm + SULBACTAM 1.5gm) / Vial',
    packDetail: '4.5 GM'
  },
  {
    sr: 66,
    brandName: 'MOXIKIND-SB 3',
    form: 'Injection',
    activeIngredients: '(AMOXYCILLIN 2gm + SULBACTAM 1gm) / Vial',
    packDetail: '3 GM'
  },
  {
    sr: 67,
    brandName: 'MOXIKIND-DXL 4',
    form: 'Injection',
    activeIngredients: '(AMOXYCILLIN 2000mg + DICLOXACILLIN 2000mg) / Vial',
    packDetail: '4000 MG'
  },
  {
    sr: 68,
    brandName: 'MOXIKIND-DXL 3',
    form: 'Injection',
    activeIngredients: '(AMOXYCILLIN 1500mg + DICLOXACILLIN 1500mg) / Vial',
    packDetail: '3000 MG'
  },
  {
    sr: 69,
    brandName: 'MOXIKIND-CLAV 3.6',
    form: 'Injection',
    activeIngredients: '(AMOXYCILLIN 3000mg + CLAVULANIC ACID 600mg) / Vial',
    packDetail: 'COMBIPACK'
  },
  {
    sr: 70,
    brandName: 'METAWAYS',
    form: 'Injection',
    activeIngredients: '(BUTAPHOSPHAN 100mg + Cyanocobalamin 50mg) / ml',
    packDetail: '30 ml & 90ml'
  },
  {
    sr: 71,
    brandName: 'MELOXIFREE PLUS',
    form: 'Injection',
    activeIngredients: '(MELOXICAM 5mg + PARACETAMOL 150mg) / ml',
    packDetail: '30 ML'
  },
  {
    sr: 72,
    brandName: 'MEGABLOTA',
    form: 'SUSPENSION',
    activeIngredients: '(DRIED ALUMINIUM HYDROXIDE GEL 600mg + MAGNESIUM HYDROXIDE 300mg + SIMETHICONE 400mg + SORBITOL 100mg + DILL OIL 50mg) / 10ml',
    packDetail: '100 ML'
  },
  {
    sr: 73,
    brandName: 'HEALOKIND',
    form: 'SPRAY',
    activeIngredients: '(Cedrus deodara 1ml + Curcuma longa 1.5ml + Eucalyptus globulus 1.5ml) / 10ml',
    packDetail: '100 ML'
  },
  {
    sr: 74,
    brandName: 'GOLERGY',
    form: 'Injection',
    activeIngredients: 'CHLORPHENIRAMINE 10mg / ml',
    packDetail: '100 ML'
  },
  {
    sr: 75,
    brandName: 'FLUKARID-DS',
    form: 'BOLUS',
    activeIngredients: 'OXYCLOZANIDE 4gm + LEVAMISOLE 2gm',
    packDetail: '1 BOLUS IN ONE STRIP'
  },
  {
    sr: 76,
    brandName: 'FLUKARID',
    form: 'ORAL SUSP.',
    activeIngredients: 'OXYCLOZANIDE 3% w/v + LEVAMISOLE 1.5% w/v',
    packDetail: '100 ml, 500ml & 1Ltr.'
  },
  {
    sr: 77,
    brandName: 'FENDIKIND-PLUS',
    form: 'BOLUS',
    activeIngredients: 'FENBENDAZOLE 3gm + IVERMECTIN 100mg',
    packDetail: '1 Bolus'
  },
  {
    sr: 78,
    brandName: 'FENDIKIND-3',
    form: 'BOLUS',
    activeIngredients: 'FENBENDAZOLE 3gm',
    packDetail: '1 Bolus'
  },
  {
    sr: 79,
    brandName: 'EXTICK-12.5%',
    form: 'DIP CONCENTRATE',
    activeIngredients: 'AMITRAZ 12.5%',
    packDetail: '15ml & 50 ml'
  },
  {
    sr: 80,
    brandName: 'ENROSTRONG-PZ',
    form: 'Injection',
    activeIngredients: '(ENROFLOXACIN 500mg + PEFLOXACIN 1500mg + ZINC 50mg) / Vial',
    packDetail: '5 GM'
  },
  {
    sr: 81,
    brandName: 'ENROSTRONG-20%',
    form: 'Injection',
    activeIngredients: 'ENROFLOXACIN 200mg / ml',
    packDetail: '30 ml'
  },
  {
    sr: 82,
    brandName: 'ENROSTRONG-10%',
    form: 'ORAL SOLUTION',
    activeIngredients: 'ENROFLOXACIN 100mg / ml',
    packDetail: '100 ml'
  },
  {
    sr: 83,
    brandName: 'ENROSTRONG-10%',
    form: 'Injection',
    activeIngredients: 'ENROFLOXACIN 100mg / ml',
    packDetail: '100 ml'
  },
  {
    sr: 84,
    brandName: 'ENERDYNA',
    form: 'LIQUID',
    activeIngredients: 'Safed Musli Extract 20gm + Panax Ginseng Liquid extract 15ml + Niacinamide 15gm + Pueraria mirifica extract 10gm + Purified Honey 100ml + Olive oil 30gm + Calcium lactate 50gm + Glycerin 300ml + Purified water q.s.',
    packDetail: '1 LITRE'
  },
  {
    sr: 85,
    brandName: 'DOLOBAN PLUS VET',
    form: 'Injection',
    activeIngredients: '(NIMESULIDE 100mg + PARACETAMOL 150mg) / ml',
    packDetail: '30 ml & 90ml'
  },
  {
    sr: 86,
    brandName: 'DOLOBAN PLUS VET',
    form: 'BOLUS',
    activeIngredients: 'NIMESULIDE 500mg + PARACETAMOL 1500mg + CHLORZOXAZONE 1200mg',
    packDetail: '2 BOLUS IN ONE STRIP'
  },
  {
    sr: 87,
    brandName: 'CORTALIFE',
    form: 'Injection',
    activeIngredients: 'ISOFLUPREDONE 2mg / ml',
    packDetail: '10 ML'
  },
  {
    sr: 88,
    brandName: 'CEFTIFORCE-SB 4.5',
    form: 'Injection',
    activeIngredients: '(CEFTRIAXONE 3gm + SULBACTAM 1.5 gm) / Vial',
    packDetail: '4.5 GM'
  },
  {
    sr: 89,
    brandName: 'CEFTIFORCE-SB 3',
    form: 'Injection',
    activeIngredients: '(CEFTRIAXONE 2gm + SULBACTAM 1gm) / Vial',
    packDetail: '3GM'
  },
  {
    sr: 90,
    brandName: 'CEFTIFORCE-500',
    form: 'Injection',
    activeIngredients: 'CEFTRIAXONE 500mg / Vial',
    packDetail: '500 mg'
  },
  {
    sr: 91,
    brandName: 'CEFTIFORCE-4',
    form: 'Injection',
    activeIngredients: 'CEFTRIAXONE 4gm / Vial',
    packDetail: '4GM'
  },
  {
    sr: 92,
    brandName: 'CEFTIFORCE-3',
    form: 'Injection',
    activeIngredients: 'CEFTRIAXONE 3gm / Vial',
    packDetail: '3GM'
  },
  {
    sr: 93,
    brandName: 'CEFTIFORCE-2',
    form: 'Injection',
    activeIngredients: 'CEFTRIAXONE 2gm / Vial',
    packDetail: '2GM'
  },
  {
    sr: 94,
    brandName: 'CALCIMUST STRONG (NF)',
    form: 'LIQUID',
    activeIngredients: '(CALCIUM 1800mg + PHOSPHORUS 925mg + Vit. A 80,000 IU + Vit. D3 8000 IU + Vit. B12 150mcg + Vit. E 50mg + Vit. H 5mg + CARBOHYDRATES 40,000mg) / 100ml',
    packDetail: '1 LTR., 5 LTR. & 10 LTR.'
  },
  {
    sr: 95,
    brandName: 'CALCIMUST',
    form: 'LIQUID',
    activeIngredients: '(Calcium 1800mg + Phosphorus 925mg + Vit. D3 8000 IU + Vit. B12 150mcg) / 100ml',
    packDetail: '5 LTR.'
  },
  {
    sr: 96,
    brandName: 'CALCIMUST-DS',
    form: 'LIQUID',
    activeIngredients: '(Calcium 3600mg + Phosphorus 1850mg + Vit. D3 16000 IU + Vit. B12 300mcg) / 100ml',
    packDetail: '5 LTR.'
  },
  {
    sr: 97,
    brandName: 'CALCIMUST',
    form: 'GEL',
    activeIngredients: '(CALCIUM 6600mg + PHOSPHORUS 3400mg + VIT. D3 32,000 IU + VIT. B12 400mcg + PUERARIA MIRIFICA EXTRACT 200mg) / 100gm',
    packDetail: '300 gm'
  },
  {
    sr: 98,
    brandName: 'CALCIMUST',
    form: 'BOLUS',
    activeIngredients: 'Tribasic Calcium Phosphate 5.16gm + Vit. D3 20,000 IU + Vit. A 50,000 IU + Vit. B12 100mcg + Vit. H 100mcg + Vit. E 100mg + Jivanti 1gm + Shatavari 1gm + Copper MHA 500mg + Zinc MHA 1.5gm',
    packDetail: '1 BOLUS IN ONE STRIP'
  },
  {
    sr: 99,
    brandName: 'CALCIMUST',
    form: 'Injection',
    activeIngredients: '(CALCIUM LEVULINATE 76.4mg + Cholecalciferol 5000 IU + Cyanocobalamin 50mcg) / ml',
    packDetail: '30 ML'
  },
  {
    sr: 100,
    brandName: 'BANDYKIND-PLUS',
    form: 'SUSP.',
    activeIngredients: '(ALBENDAZOLE 750mg + IVERMECTIN 25mg) / 30ml',
    packDetail: '30 ML, 90ML'
  },
  {
    sr: 101,
    brandName: 'BANDYKIND-PLUS',
    form: 'BOLUS',
    activeIngredients: 'ALBENDAZOLE 3gm + IVERMECTIN 100mg',
    packDetail: '1 BOLUS IN ONE STRIP'
  },
  {
    sr: 102,
    brandName: 'BANDYKIND-3',
    form: 'BOLUS',
    activeIngredients: 'ALBENDAZOLE 3gm',
    packDetail: '1 BOLUS IN ONE STRIP'
  },
  {
    sr: 103,
    brandName: 'BANDYKIND',
    form: 'SUSP.',
    activeIngredients: 'ALBENDAZOLE 25mg / ml',
    packDetail: '30 ML'
  },
  {
    sr: 104,
    brandName: 'APTIQUIK',
    form: 'BOLUS',
    activeIngredients: 'Indian Gentian (Andrographis paniculata) 100mg + Vit. A 15625 IU + Vit. D3 1562.5 IU + Vit. E 6.25mg + Nicotinamide 25mg + Calcium 1800mg + Phosphorus 300mg + Cobalt Chloride 53mg + Copper 8mg + Magnesium 125mg + Iron 37.5mg + Zinc 53.25mg + Selenium 0.25mg',
    packDetail: '4 BOLUS'
  }
];
