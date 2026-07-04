import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Company } from "@/types/company";

const COLLECTION_NAME = "companies";

/**
 * Save or update a company profile
 */
export async function saveCompany(
  uid: string,
  company: Company
): Promise<void> {
  const companyRef = doc(db, COLLECTION_NAME, uid);

  await setDoc(companyRef, company);
}

/**
 * Load a company profile
 */
export async function getCompany(
  uid: string
): Promise<Company | null> {
  const companyRef = doc(db, COLLECTION_NAME, uid);

  const snapshot = await getDoc(companyRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as Company;
}