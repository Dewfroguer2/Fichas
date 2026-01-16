import type { IDBPDatabase } from "idb";
import { openDB } from "idb";
import type { Character, SystemConfig, Talent, DBSchema } from "../types";

const DB_NAME = "FichasDB";
const DB_VERSION = 1;

let db: IDBPDatabase<DBSchema> | null = null;

export async function initDB() {
  if (db) return db;

  // TODO: Implementar inicializacao do IndexedDB
  // - Criar object stores: characters, systems, talents
  // - Criar indices para busca rapida
  
  return db;
}

// TODO: Implementar CRUD de Personagens
export async function createCharacter(character: Character): Promise<string> {
  throw new Error("Not implemented");
}

export async function getCharacter(id: string): Promise<Character | undefined> {
  throw new Error("Not implemented");
}

export async function getAllCharacters(): Promise<Character[]> {
  throw new Error("Not implemented");
}

export async function updateCharacter(character: Character): Promise<void> {
  throw new Error("Not implemented");
}

export async function deleteCharacter(id: string): Promise<void> {
  throw new Error("Not implemented");
}

// TODO: Implementar CRUD de Sistemas
export async function saveSystems(systems: SystemConfig[]): Promise<void> {
  throw new Error("Not implemented");
}

export async function getSystem(id: string): Promise<SystemConfig | undefined> {
  throw new Error("Not implemented");
}

export async function getAllSystems(): Promise<SystemConfig[]> {
  throw new Error("Not implemented");
}

// TODO: Implementar CRUD de Talentos
export async function createTalent(talent: Talent): Promise<string> {
  throw new Error("Not implemented");
}

export async function getTalent(id: string): Promise<Talent | undefined> {
  throw new Error("Not implemented");
}

export async function getTalentsBySource(source: string): Promise<Talent[]> {
  throw new Error("Not implemented");
}

export async function updateTalent(talent: Talent): Promise<void> {
  throw new Error("Not implemented");
}

export async function deleteTalent(id: string): Promise<void> {
  throw new Error("Not implemented");
}

// Utilitarios
export async function exportCharacterAsJSON(characterId: string): Promise<string> {
  throw new Error("Not implemented");
}

export async function importCharacterFromJSON(jsonString: string): Promise<string> {
  throw new Error("Not implemented");
}
