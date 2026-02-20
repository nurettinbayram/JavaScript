class Profile {
  constructor() {
    this.clientId = "";
    this.clientSecret = "";
  }

  async getProfile(username) {
    try {
      const profileResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${username}`,
      );
      const profileData = await profileResponse.json();

      // 🔥 KULLANICI YOKSA BURADA DÖN
      if (profileData.length === 0) {
        return {
          profileData: [],
          taskData: [],
        };
      }

      const taskResponse = await fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${profileData[0].id}`,
      );
      const taskData = await taskResponse.json();

      return {
        profileData,
        taskData,
      };
    } catch (error) {
      console.error(error);
      return {
        profileData: [],
        taskData: [],
      };
    }
  }
}
