export interface IAppliedUniversity {
	id: number;
	university: string;
	universityId: number;
	country: string;
	countryId: number;
	degree: string;
	degreeId: number;
	major: string;
	majorId: number;
	acSCore: number;
	applicationDate: string;
	responseDate: string;
	found: number;
	status: number;
	applicationProof?: any;
	resultProof?: any;
}
