 const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '+';
        const count = +counter.innerText.replace(/\D/g, '');

        const speed = 50; // lower = faster
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = `${count + increment}${suffix}`;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = `${target}${suffix}`;
        }
      };

      updateCount();
    });