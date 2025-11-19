export default async function getArtData(departmentId: string, count: number){
  try {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=' + departmentId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const DepObjectsIds = await response.json();
    
    if (!DepObjectsIds.objectIDs || DepObjectsIds.objectIDs.length === 0) {
      throw new Error('No objects found for this department');
    }
    
    const objectData = [];
    for (let i = 0; i < Math.min(count, DepObjectsIds.objectIDs.length); i++) {
      const objectId = DepObjectsIds.objectIDs[i];
      
      try {
        const objectResponse = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`);
        
        if (!objectResponse.ok) {
          console.warn(`Failed to fetch object ${objectId}: ${objectResponse.status}`);
          continue;
        }
        
        const objectInfo = await objectResponse.json();
        objectData.push(objectInfo);
      } catch (error) {
        console.error(`Error fetching object ${objectId}:`, error);
        continue;
      }
    }
    return objectData;
    
  } catch (error) {
    console.error('Error fetching art data:', error);
    throw error;
  }
}
