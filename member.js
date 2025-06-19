function skillsMember() {
  return {
    name: 'skillsMember',
    description: 'A member of the skills team',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the member'
      },
      name: {
        type: 'string',
        description: 'Name of the member'
      },
      role: {
        type: 'string',
        description: 'Role of the member in the team'
      },
      skills: {
        type: 'array',
        items: {
          type: 'string'
        },
        description: 'List of skills possessed by the member'
      }
    }
  };
}