

const appendRowToSheet =  async (data) => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/d593e8c9-b1f0-446f-883a-fc7b622ab9f8",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

export {appendRowToSheet}
