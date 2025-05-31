
export const placeholderImages = {
  // Travel related images
  mountain: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&crop=center",
  beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop&crop=center",
  city: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop&crop=center",
  hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center",
  resort: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop&crop=center",
  flight: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&crop=center",
  
  // User avatars
  userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  partnerAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
  adminAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  
  // Business related
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=center",
  meeting: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
  
  // Activity related
  hiking: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
  swimming: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop&crop=center",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&crop=center",
  
  // Default fallback
  default: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&crop=center"
};

export const getPlaceholderImage = (type: keyof typeof placeholderImages = 'default', width = 400, height = 300) => {
  const baseUrl = placeholderImages[type] || placeholderImages.default;
  return baseUrl.replace(/w=\d+/, `w=${width}`).replace(/h=\d+/, `h=${height}`);
};

export const getUserAvatarPlaceholder = (userType?: string) => {
  switch (userType) {
    case 'admin':
      return placeholderImages.adminAvatar;
    case 'partner':
      return placeholderImages.partnerAvatar;
    default:
      return placeholderImages.userAvatar;
  }
};
