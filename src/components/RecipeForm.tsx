import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addListItem } from '../store/addSlice';
import { ListItem } from '../utils/types';
import { Form, Input, Button, Select, message } from 'antd';
import { getOnlyCharactersRule, getOnlyNumbersRule } from '../utils/validationRules';

// icon
import { ReactComponent as ArrowIcon } from '../assets/images/arrow.svg';

interface RecipeFormProps {
  onBackButtonClick: () => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onBackButtonClick }) => {
  const dispatch = useDispatch();
  const listItemsData = useSelector((state: any) => state.add.listItems);
  console.log({ listItemsData });

  const [form] = Form.useForm(); // Initialize Ant Design form instance

  const handleSubmit = (values: any) => {

    const formData: ListItem = {
      id: 1,
      flag: 'Vietnam',
      name: values.name,
      category: values.difficulty,
      duration: '35min',
      details: {
        difficulty: values.difficulty,
        description: values.description,
        protein: values.protein,
        spiceLevel: values.spiceLevel,
        spices: values.spices,
        cookingOil: values.cookingOil,
        volumeWeight: values.volumeWeight,
        serves: values.serves,
        authenticity: values.authenticity,
        stock: values.stock,
        produce: values.produce,
        origin: values.origin,
      },
    };

    dispatch(addListItem(formData));
    message.success('List item added');
    form.resetFields(); // Reset the form fields after submission
  };

  return (

    <div className='app-add-list'>
      {/* title */}
      <h3>
        <button className='btn-back' onClick={onBackButtonClick}>
          <ArrowIcon />
        </button>
        Add new recipe
      </h3>

      {/* form */}
      <Form
        form={form}
        onFinish={handleSubmit}
        className='form-grid'
        initialValues={{
          difficulty: "Easy",
          origin: "India",
          authenticity: "One",
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          className='form-group'
          rules={[
            { required: true, message: 'Please input the name of the recipe!' },
            getOnlyCharactersRule('name'),
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Origin"
          name="origin"
          className='form-group'
          rules={[{ required: true, message: 'Please select the origin of the recipe!' }]}
        >
          <Select options={[
            { value: 'India', label: 'India' },
            { value: 'Vietnam', label: 'Vietnam' },
            { value: 'Thailand', label: 'Thailand' },
            { value: 'Italy', label: 'Italy' },
            { value: 'Japan', label: 'Japan' },
          ]} />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          className='form-group full-width'
          rules={[{ required: true, message: 'Please describe your recipe!' }]}
        >
          <Input.TextArea placeholder="Describe your recipe..." />
        </Form.Item>

        <Form.Item
          label="Difficulty"
          name="difficulty"
          className='form-group'
          rules={[{ required: true, message: 'Please input the difficulty level!' }]}
        >
          <Select options={[
            { value: 'Easy', label: 'Easy' },
            { value: 'Medium', label: 'Medium' },
            { value: 'Hard', label: 'Hard' },
          ]}>
          </Select>
        </Form.Item>


        <Form.Item
          label="Protein"
          name="protein"
          className='form-group'
          rules={[
            { required: true, message: 'Please input the protein used in the recipe!' },
            getOnlyCharactersRule('protein'),
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Produce"
          name="produce"
          className='form-group'
          rules={[
            { required: true, message: 'Please input the produce used in the recipe!' },
            getOnlyCharactersRule('produce'),
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Spices"
          name="spices"
          className='form-group'
          rules={[
            { required: true, message: 'Please input the spice of the recipe!' },
            getOnlyCharactersRule('spices'),
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Cooking Oil?"
          name="cookingOil"
          className='form-group'
          rules={[
            { required: true, message: 'Please input the cooking oil used in the recipe!' },
            getOnlyCharactersRule('cooking oil'),
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Volume'
          name='volumeWeight'
          className='form-group'
          rules={[
            { required: true, message: 'Please input the volume/weight of the recipe!' },
            getOnlyNumbersRule('volume/weight'),
          ]}
        >
          <div className="input-with-extra-text">
            <Input type='number' />
            <span className='sup'>grams</span>
          </div>
        </Form.Item>

        <Form.Item
          label="Serves"
          name="serves"
          className='form-group'
          rules={[{ required: true, message: 'Please input the number of servings!' }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Authenticity"
          name="authenticity"
          className='form-group'
          rules={[{ required: true, message: 'Please input the authenticity of the recipe!' }]}
        >
          <Select options={[
            { value: 'One', label: 'One' },
            { value: 'Two', label: 'Two' },
            { value: 'Three', label: 'Three' },
          ]}>

          </Select>
        </Form.Item>

        <Form.Item
          label="Stock"
          name="stock"
          className='form-group full-width'
          rules={[{ required: true, message: 'Please input the stock used in the recipe!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item className='form-group full-width'>
          <Button type="primary" htmlType="submit">
            Add Recipe
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RecipeForm;
