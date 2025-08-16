/* eslint-disable react/jsx-no-constructed-context-values */
import { RiArrowLeftLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import SelectInput from '../../components/SelectInput';
import Button from '../../components/Button';

import useForm from '../../hooks/useForm';
import { useAuth } from '../../contexts/auth-context';
import usePageTitle from '../../hooks/usePageTitle';

import { DateOptions } from '../../utils/utils';
import { ChangeBirthDateValidator } from '../../utils/validator';
import axios from '../../utils/axios';

const ChangeBirthDate = () => {
  usePageTitle('修改出生日期 / 猿星球');
  const navigate = useNavigate();
  const { updateUser } = useAuth();
  const { validateForm } = ChangeBirthDateValidator;

  const updateDOB = useMutation(({ dateOfBirth }) => {
    return axios.patch('/api/users/me/dob', {
      dateOfBirth,
    });
  });

  const form = useForm({
    initialValues: {
      month: '',
      day: '',
      year: '',
    },
    validate: validateForm,
    onSubmit: (values, { resetForm }) => {
      // Validate date before creating Date object
      const dateString = `${values.year}/${values.month}/${values.day}`;
      const dateObj = new Date(dateString);

      // Check if the date is valid
      if (Number.isNaN(dateObj.getTime())) {
        form.setFieldError('month', '请选择有效的日期');
        return;
      }

      updateDOB.mutate(
        {
          dateOfBirth: dateObj.toISOString(),
        },
        {
          onSuccess: (response) => {
            updateUser(response.data.user);
            resetForm();
            toast.custom((t) => (
              <div
                className={`${
                  t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-primary text-on-primary text-center py-2`}
              >
                <p>出生日期修改成功</p>
              </div>
            ));
          },
          onError: (err) => {
            const error = err.response.data.errors || err.response.data.error;
            if (Array.isArray(error)) {
              const errors = error.reduce((acc, cur) => {
                acc[cur.param] = cur.msg;
                return acc;
              }, {});
              form.setMultipleFieldsError(errors);
            }
          },
        }
      );
    },
  });
  return (
    <div>
      <div className="px-4 py-4 sticky top-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/settings')}
            className="text-on-surface"
            title="back"
          >
            <IconContext.Provider
              value={{
                size: '18px',
                style: {
                  color: 'inherit',
                },
              }}
            >
              <RiArrowLeftLine />
            </IconContext.Provider>
          </button>
          <header>
            <h3 className="text-xl font-semibold">修改出生日期</h3>
          </header>
        </div>
      </div>
      <div>
        <form
          // className="h-full relative"
          className="px-4 py-4"
          onSubmit={form.handleSubmit}
        >
          <div className="flex justify-between gap-3 mb-4">
            <div className="w-1/2">
              <SelectInput
                id="year"
                name="year"
                value={form.values.year}
                label="年"
                onFocus={form.handleFocus}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                error={form.touched.year ? form.errors.year : ''}
                options={DateOptions.getYearsInRange(DateOptions.year_range)}
              />
            </div>
            <div className="w-1/4">
              <SelectInput
                id="month"
                name="month"
                value={form.values.month}
                label="月"
                onFocus={form.handleFocus}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                error={form.touched.month ? form.errors.month : ''}
                options={DateOptions.months}
              />
            </div>
            <div className="w-1/4">
              <SelectInput
                id="day"
                name="day"
                value={form.values.day}
                label="日"
                onFocus={form.handleFocus}
                onBlur={form.handleBlur}
                onChange={form.handleChange}
                error={form.touched.day ? form.errors.day : ''}
                options={DateOptions.daysInMonth(
                  form.values.month,
                  form.values.year
                )}
              />
            </div>
          </div>
          <div>
            <Button type="submit" isLoading={updateDOB.isLoading}>
              保存
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeBirthDate;
