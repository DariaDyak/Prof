export const scrollToElement = (
  elementId: string, 
  offset: number = 80,
  behavior: ScrollBehavior = 'smooth'
) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: behavior
    });
    
    console.log(`Scrolling to element with id: ${elementId}`);
    return true;
  } else {
    console.warn(`Element with id "${elementId}" not found`);
    return false;
  }
};

export const scrollButton = scrollToElement;