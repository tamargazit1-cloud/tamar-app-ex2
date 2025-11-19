export default async function getRandomDepartment(){
  try {
    const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const dataDepartment = await response.json();
    
    if (!dataDepartment.departments || dataDepartment.departments.length === 0) {
      throw new Error('No departments found');
    }
    
    // Randomly select one department from the array
    const randomIndex = Math.floor(Math.random() * dataDepartment.departments.length);
    return dataDepartment.departments[randomIndex];
    
  } catch (error) {
    console.error('Error fetching random department:', error);
    throw error;
  }
}
